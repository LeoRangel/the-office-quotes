const url = process.env.REACT_APP_QUOTES_API;
export const getQuote = () => fetch(`${url}`).then((response) => response.json())
