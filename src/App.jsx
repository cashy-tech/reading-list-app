import { useState } from "react";
import BookCreate from "./components/book-create";
import BookList from "./components/book-list";

function App() {
  const [books, setBooks] = useState([]);

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

  const handleCreate = (newTitle) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title: newTitle },
    ];
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
