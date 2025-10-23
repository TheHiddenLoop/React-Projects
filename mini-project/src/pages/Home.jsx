import { useState } from "react"
import { fruites } from "../useFtruites.js"

export default function Home() {
  const [fruits, setFruits] = useState(fruites)

  function handleDelete(fruit) {
    setFruits(prev => prev.filter(e => e.id !== fruit.id))
  }


  return (
    <div className="max-w-md mx-auto mt-4">
      {fruits.length > 0 ? (
        <table className="border border-gray-400 border-collapse w-full text-sm">
          <thead>
            <tr>
              <th className="border border-gray-400 px-2 py-1 text-left">Fruit Name</th>
              <th className="border text-center border-gray-400 w-[90px] px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((fruit) => (
              <tr key={fruit.id}>
                <td className="border border-gray-400 px-2 py-1">{fruit.name}</td>
                <td className="border text-center border-gray-400 px-2 py-1">
                  <button className="bg-red-500 text-white px-2 py-0.5 rounded text-xs" onClick={() => handleDelete(fruit)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 text-sm">No data here</p>
      )}
    </div>
  )
}