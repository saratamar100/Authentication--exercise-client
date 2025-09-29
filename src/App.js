import { useEffect, useState } from "react";
import "./App.css";
import { getBooks } from "./services/books";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then((b) => setBooks(b));
  }, []);
  console.log("books", books);
  return (
    <div className="App">
      <h1>Authentication Exercise</h1>
      <div>{JSON.stringify(books)}</div>
    </div>
  );
}

export default App;
