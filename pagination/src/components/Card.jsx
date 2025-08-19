import React from 'react'

export function Card({ image, title, price, oldPrice, discountedPrice, stock, description, size }) {
  return (
    <div className="flex bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      
      <div className="w-[250px] h-[276px] flex items-center justify-center bg-gray-100 cursor-pointer">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover rounded-l-xl transition-transform duration-300 hover:scale-105" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 flex-1">
        <h2 className="font-semibold text-xl text-gray-800">{title}</h2>

        <div className="flex items-center gap-3">
          <p className="line-through text-red-600 bg-red-100 px-2 py-0.5 rounded-md text-sm">${oldPrice}</p>
          <p className="font-bold text-xl text-blue-600">${price}</p>
          <p className="text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-md">
            ${discountedPrice} Off
          </p>
        </div>

        {size?.length > 0 && (
          <div>
            <p className="text-gray-700 text-sm flex gap-1">
              Sizes: <span className="font-medium">{size[0]}</span><span className="font-medium">{size[1]}</span><span className="font-medium">{size[2]}</span>
            </p>
          </div>
        )}

        <p className={`text-sm font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
          {stock > 0 ? `In stock: ${stock}` : "Out of stock"}
        </p>

        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        <div className="mt-auto">
          <button
            className="mt-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
            disabled={stock === 0}
          >
            {stock > 0 ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  )
}
