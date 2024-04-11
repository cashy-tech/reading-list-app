import { useState } from "react";
import BookCreate from "./components/book-create";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (newtitle) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title: newtitle },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}
export default App;
