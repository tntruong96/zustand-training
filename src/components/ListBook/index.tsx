import {
  useAvailableBooks,
  useBookActions,
  useBooks,
  useIssuedBooks,
} from "../../hooks/useBookStore";
import "./index.css";

const ListBook = () => {
  const listBook = useBooks();
  const countAvailable = useAvailableBooks();
  const countIssue = useIssuedBooks();
  const { issueBook, returnBook } = useBookActions();

  return (
    <div className="wrapper">
      <h1>List Book</h1>
      <div className="book-container">
        <div className="count-number">
          <div>Number of Item: {listBook.length}</div>
          <div>Available: {countAvailable}</div>
          <div>Issued: {countIssue}</div>
        </div>
        {listBook.map((book) => (
          <div key={book.id} className="book-item">
            <div>{book.title}</div>
            <div>{book.description}</div>
            <div className="btn-container">
              <button
                disabled={book.status !== "available"}
                className="btn btn-issue"
                onClick={() => issueBook(book.id)}
              >
                Issued
              </button>
              <button
                onClick={() => returnBook(book.id)}
                disabled={book.status !== "issued"}
                className="btn btn-return"
              >
                Return
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBook;
