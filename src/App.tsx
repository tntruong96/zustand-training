import "./App.css";
import BookForm from "./components/BookForm";
import ListBook from "./components/ListBook";

function App() {
  console.log("rerender app");

  return (
    <div className="app-container">
      <BookForm />
      <ListBook />
    </div>
  );
}

export default App;
