import "./App.css";
import BookForm from "./components/BookForm";
import ListBook from "./components/ListBook";

function App() {
  console.log("rerender app");

  return (
    <>
      {/* <Counter />
      <Counter2 /> */}
      <BookForm />
      <ListBook />
    </>
  );
}

export default App;
