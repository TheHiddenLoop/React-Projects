import { useEffect, useState } from "react";

const API_KEY = "4fa497a66f604b978b984868ea3d5260";
const BASE_URL = "https://newsapi.org/v2/everything";

export default function useFetch(defaultQuery = "India") {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(defaultQuery);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setData([]);     
    setPage(1);
  }, [query]);

  useEffect(() => {
    fetchData(query, page);
  }, [page, query]);

  const fetchData = async (q, p) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${BASE_URL}?q=${q}&pageSize=30&page=${p}&apiKey=${API_KEY}`
      );
      const result = await res.json();

      if (result.status !== "ok") throw new Error(result.message);

      setData(prev => [...prev, ...result.articles]);
      setHasMore(result.articles.length === 30); 
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const search = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setData([]);
      setPage(1);
    }
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1);
    }
  };

  return { data, loading, error, search, loadMore, hasMore };
}
