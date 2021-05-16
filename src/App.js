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
import Footer from "./components/Footer";
import Cryptoportofolio from "./components/Cryptoportofolio";

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
      <Table />
      <Earning />
      <Cryptoportofolio />
      <Trust />
      <BlueLine />
      <Account />
      <Space/>
      <Footer/>
    </div>
  );
}

export default App;
