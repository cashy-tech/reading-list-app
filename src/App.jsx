import { useContext, useEffect } from "react";
import BooksContext from "./context/books";
import BookCreate from "./components/book-create";
import BookList from "./components/book-list";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List:</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;
