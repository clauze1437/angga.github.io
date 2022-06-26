import React, { useState } from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  // TODO: answer here
  React.useEffect(() => {
    // TODO: answer here
    getQuote()
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data)
      })
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a href="/">Random Quote</a>
      </nav>
      <body className="container p-3">
        <div className="d-flex flex-column justify-content-center align-items-center bg-warning">
          {loading && <div>Loading...</div>}
          <div>
            <div>
              <p data-testid="quote">{quote.content}</p>
            </div>
            <div className="blockquote-footer">
              {quote.author}
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => getQuote()}>
            Get another quote
          </button>
        </div>
      </body>
    </>
  );
} 