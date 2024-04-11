import { useState } from "react";
import BookEdit from "./book-edit";
function BookShow({ book, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} />;
  }
  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="edit" onclick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
