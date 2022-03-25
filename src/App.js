import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert("you are clicked");
    console.log("hi");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clickme{count}</button>
      <button onClick={() => setNum(num + 1)}>clickme{num}</button>
    </div>
  );
}

export default App;
