import "../app.css";

function ResultComponent({ quote, loading }) {
  return (
    <div className="quote-container">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <p className="quote-text">
            {quote?.quote ||
              "It is sad that the Republican leadership is not as interested as they say they are in protecting the institution of marriage as they are in waging a campaign to divide and distract the American people from the real issues that need to be addressed."}
          </p>
          <p className="quote-author">-{quote?.author || "Kendrick Meek"}</p>
        </>
      )}
    </div>
  );
}

export default ResultComponent;
