import './App.css';
import {MyCounter} from "./components/counter";
import React from "react";

function App() {
    const counters = [
        {id: 1, initial: 6, min: -5, max: 10},
        {id: 2, initial: 5},
        {id: 3},
    ];
    const listCounter = counters.map((counter) =>
        <li key={counter}>
            <MyCounter min={counter.min} max={counter.max} value={counter.initial}/>
        </li>
    );
  return (
    <div className="App">
        <MyCounter />
        <ul key={counters}>
            {listCounter}
        </ul>
    </div>
  );
}

export default App;
