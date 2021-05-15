import React from "react";
import './App.css';
import Earning from "./components/Earning";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Space from "./components/Space";
import Table from "./components/Table";
import BlueLine from "./components/BlueLine";
import Account from "./components/Account";
import Trust from "./components/Trust";

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
      <Table />
      <Earning />
      <Trust />
      <BlueLine />
      <Account />
      <Space/>
    </div>
  );
}

export default App;
