import "./App.css";
import ResultComponent from "./components/ResultComponents";
import { ButtonComponents } from "./components/ButtonComponents.jsx";
import { useState } from "react";
import { quotesApi } from "./services/quotesApi.js";

function App() {
  const [quoteData, setQuotesData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateQuote() {
    try {
      setLoading(true);
      const data = await quotesApi();
      setQuotesData(data[0]);
    } catch (err) {
      console.error("Error related to: ", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ButtonComponents onClick={generateQuote} />
      <ResultComponent quote={quoteData} loading={loading} />
    </>
  );
}

export default App;
