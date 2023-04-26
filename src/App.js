import logo from './logo.svg';
import './App.css';
import {MyCounter} from "./components/counter";
import React from "react";
import { Button } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">
        <MyCounter />
    </div>
  );
}

export default App;
