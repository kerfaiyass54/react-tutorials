import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign:"center"}}>
      <h1>React + Vite Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;