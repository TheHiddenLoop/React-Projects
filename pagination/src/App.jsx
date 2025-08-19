import { Pagination } from "./components/Pagination";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-[100px]">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
        Product Listing with Pagination
      </h1>
      <Pagination />
    </div>
  );
}
