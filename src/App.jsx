import { useState } from "react";
import BookCreate from "./components/book-create";
import BookList from "./components/book-list";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreate = (newtitle) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title: newtitle },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}
export default App;
