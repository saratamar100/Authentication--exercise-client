import { useEffect, useState } from "react";
import "./App.css";
import { getBooks, login } from "./services/books";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then((b) => setBooks(b));
  }, []);
  console.log("books", books);
  const handleLogin = async () => {login("sara", "p1")};
  return (
    <div className="App">
      <h1>Authentication Exercise</h1>
      <div>{JSON.stringify(books)}</div>

      <button onClick={handleLogin}>Login with username "sara" and password "p1"</button>
    </div>
  );
}

export default App;
