import reactLogo from "./assets/react.svg";
import { useStore, useDogStore } from "./store";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { count, name, inc, dec, changeName } = useStore();

  let { paw, snout, fur } = useDogStore();

  const unsub2 = useDogStore.subscribe(
    (state) => state.paw,
    console.log("changed")
  );

  unsub2();

  useEffect(() => {
    console.log("paw", paw);
    console.log("snout", snout);
    console.log("fur", fur);
  }, [paw]);

  const handleNameClick = (e) => {
    changeName(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => inc()}>Increment</button>
        <button onClick={() => dec()}>Decrement</button>
        <button
          onClick={() => useDogStore.setState((state) => ({ paw: !state.paw }))}
        >
          Change Paw
        </button>
        <p>Count is {count}</p>
        <input onChange={(e) => handleNameClick(e)} />
        <p>Name is {name}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
