import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import { X } from "lucide-react";
import Header from "./Header";

export default function News() {
  const [visible, setVisible] = useState(false);
  const { data, loading, error, search, loadMore, hasMore } = useFetch("India");
  const [current, setCurrent] = useState([]);

  const handleSearch = (term) => {
    search(term);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (nearBottom && hasMore && !loading) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, loadMore]);

  const handleClick = (item) => {
    setVisible(true);
    setCurrent(item);
  };

  return (
    <>
      <Header onSearch={handleSearch} />

      <div className="font-poppins bg-background px-4 md:px-10 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <Card
            key={i}
            image={item.urlToImage}
            title={item.title}
            description={item.description}
            onclick={() => handleClick(item)}
          />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!hasMore && <p className="text-center text-secondary my-6">No more articles.</p>}

      {visible && current && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-poppins">
          <div className="bg-white rounded-xl shadow-lg w-[90%] md:w-[700px] relative">
            <div className="flex justify-between items-center px-4 py-4">
              <h2 className="text-xl font-semibold text-primary">{current.title}</h2>
              <div
                className="bg-secondary text-white font-bold rounded-full transition-transform hover:rotate-45 hover:bg-primary hover:cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <X size={30} className="inline p-1" />
              </div>
            </div>

            <div className="h-[270px]">
              <img className="h-full w-full object-cover" src={current.urlToImage || "placeholder.svg"} alt={current.title} />
            </div>

            <p className="text-text px-4 py-3">{current.description}</p>

            <div className="flex gap-7 px-4 py-3">
              <span className="bg-secondary text-white rounded-xl px-3 py-1">
                {current.author || "Unknown Author"}
              </span>
              <span className="bg-secondary text-white rounded-xl px-3 py-1">
                {new Date(current.publishedAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex justify-start px-4 py-3">
              <a
                href={current.url}
                target="_blank"
                className="bg-accent text-white px-6 py-2 rounded-md hover:bg-hover transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
