import { useState } from "react";
import BookCreate from "./components/book-create";
import BookList from "./components/book-list";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("https://localhost-3001/books");
    setBooks(response.data);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreate = async (newTitle) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: newTitle,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h1>Reading List:</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}
export default App;
