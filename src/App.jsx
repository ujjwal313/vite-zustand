import reactLogo from "./assets/react.svg";
import { useStore } from "./store";
import "./App.css";

function App() {
  const { count, name, inc, dec, changeName } = useStore();

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
