import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  document.title = `Click me ${count} times`; /* to set dynamic title of browser tab */
  return (
    <button onClick={() => setCount(count + 1)}>Click me {count} times</button>
  );
}

export default App;
