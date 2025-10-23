import { useState } from 'react';
import { items } from '../data/dummey';
import { Card } from './Card';

export function Pagination() {
  const [page, setPage] = useState(1);
  const limit = 5;
  const skip = (page - 1) * limit;

  const paginationItems = items.slice(skip, skip + limit);
  const totalPages = Math.ceil(items.length / limit);

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6">
        {paginationItems.map((item) => (
          <Card
            key={item._id}
            image={item.image}
            title={item.title}
            oldPrice={item.oldPrice}
            price={item.price}
            stock={item.stock}
            size={item.size}
            description={item.description}
            discountedPrice={item.discountedPrice}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg border 
          ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
          Previous
        </button>

        <span className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 font-medium">
          {page} / {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg border 
          ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
