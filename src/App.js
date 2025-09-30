import { useEffect, useState } from "react";
import "./App.css";
import { getBooks } from "./services/books";
import { login, logout } from "./services/auth";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then((b) => setBooks(b));
  }, []);
  console.log("books", books);
  const handleLogin = async () => {login("sara", "p1")};
  const handleLogout = async () => {logout()};
  return (
    <div className="App">
      <h1>Authentication Exercise</h1>
      <div>{JSON.stringify(books)}</div>

      <button onClick={handleLogin}>Login with username "sara" and password "p1"</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
