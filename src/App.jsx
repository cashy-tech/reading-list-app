import { useState } from "react";
import BookCreate from "./components/book-create";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {};
  return (
    <div>
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}
export default App;
