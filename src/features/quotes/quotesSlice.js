// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export function addQuote(quote) {
  return { type: "quotes/add", payload: quote };
}

export function removeQuote(id) {
  return { type: "quotes/remove", payload: id };
}

export function upvoteQuote(id) {
  return { type: "quotes/upvote", payload: id };
}

export function downvoteQuote(id) {
  return { type: "quotes/downvote", payload: id };
}

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
    case "quotes/upvote":
      return state.map((quote) => {
        if (quote.id !== action.payload) {
          return quote;
        } else {
          return { ...quote, votes: quote.votes + 1 };
        }
      });
    case "quotes/downvote":
      return state.map((quote) => {
        if (quote.id !== action.payload) {
          return quote;
        } else {
          if (quote.votes === 0) {
            return quote;
          } else {
            return { ...quote, votes: quote.votes - 1 };
          }
        }
      });
  }
  return state;
}
