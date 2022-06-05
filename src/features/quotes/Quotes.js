import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux";
import { upvoteQuote, downvoteQuote, removeQuote } from "./quotesSlice";

function Quotes() {
  const quotes = useSelector((state) => state.quotes);

  console.log(quotes);

  const quoteElements = quotes.map((quote) => (
    <QuoteCard
      key={quote.id}
      downvoteQuote={downvoteQuote}
      upvoteQuote={upvoteQuote}
      removeQuote={removeQuote}
      quote={quote}
    />
  ));

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">{quoteElements}</div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
