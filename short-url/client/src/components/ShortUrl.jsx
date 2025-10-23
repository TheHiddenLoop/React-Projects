import { useState } from "react"
import { useUrl } from "../context/urlContext";

export function ShortUrl() {
    let [url, setUrl] = useState('');
    const { shortUrl } = useUrl();
    const handleSubmit = () => {
        if(url === '') return;
        shortUrl(url);
        setUrl('');
    }
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <input
                type="text"
                placeholder="Enter a URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800 shadow-sm"
            />
            <button
                onClick={() => handleSubmit()}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300 shadow-md"
            >
                Shorten
            </button>
        </div>
    )
}
