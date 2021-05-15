import React from "react";
import './App.css';
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Space from "./components/Space";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
      <Space/>
      <Table />
    </div>
  );
}

export default App;
