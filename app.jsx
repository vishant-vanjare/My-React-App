import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>My React App 🚀</h1>
      <p>Welcome to your first React application!</p>

      <div className="counter">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Increment +
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement -
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
