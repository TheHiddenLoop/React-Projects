import React, { useEffect } from 'react'
import { useUrl } from '../context/urlContext';

export function Urls() {
  const { response, getAllUrl } = useUrl();
  
  useEffect(() => {
    getAllUrl();
  }, []);

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link).then(() => alert("Copied URL ✅"))
  }

  return (
    <div className="space-y-3">
      {response.length > 0 ? (
        response.reverse().map((url, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white/20 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <p
              className="text-indigo-100 font-medium truncate hover:underline"
            >
              {url.shortURL}
            </p>
            <button
              onClick={() => handleCopy(url.shortURL)}
              className="px-3 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium"
            >
              Copy
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-white/80">No URLs yet. Try shortening one!</p>
      )}
    </div>
  )
}
