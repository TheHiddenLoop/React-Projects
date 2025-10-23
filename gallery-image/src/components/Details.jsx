import React from 'react';

export function Details({ name, description, date, size }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold mb-2">Image Details</h2>
      <div className="space-y-1 text-gray-700">
        <p><span className="font-medium">Name:</span> {name || "—"}</p>
        <p><span className="font-medium">Description:</span> {description || "—"}</p>
        <p><span className="font-medium">Date:</span> {date || "—"}</p>
        <p><span className="font-medium">Size:</span> {size || "—"}</p>
      </div>
    </div>
  );
}
