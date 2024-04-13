import { useState, useEffect } from "react";
import BookCreate from "./components/book-create";
import BookList from "./components/book-list";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("https://localhost-3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

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
