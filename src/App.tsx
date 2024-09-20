import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter";

function App() {
  console.log("rerender app");

  return (
    <>
      <Counter />
      <Counter2 />
    </>
  );
}

export default App;
