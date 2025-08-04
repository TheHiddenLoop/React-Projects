import React, { useState } from 'react'
import { fruites } from '../useFtruites'
export default function SearchFruit() {
  
  let [input, setInput]=useState('');
  
  let filterItem=fruites.filter(e=>e.name.toLowerCase().includes(input.toLowerCase()));


  return (
    <div className="max-w-md mx-auto mt-4 flex justify-center items-center flex-col">
      <input
          type="text"
          value={input}
          placeholder="Enter a fruit name"
          onChange={(e) => setInput(e.target.value)}
          className="border px-2 py-1 rounded-md mb-3"
        />


      {filterItem.length > 0 ? (
        <table className="border border-gray-400 border-collapse w-full text-sm">
          <thead>
            <tr>
              <th className="border border-gray-400 px-2 py-1 text-left">Fruit Name</th>
            </tr>
          </thead>
          <tbody>
            {filterItem.map((fruit, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-2 py-1">{fruit.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 text-sm">No results found</p>
      )}
    </div>
  )
}
