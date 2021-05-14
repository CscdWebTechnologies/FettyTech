import React from 'react'
import chart from "./assets/images/chart.png";
import bitcoin from "./assets/images/bitcoin.png";
import ethereum from "./assets/images/eth.png";
import bitcoinCash from "./assets/images/green.png";
import litecoin from "./assets/images/lit.png";
import "./table.css";

const Lists = [
    {
      icon: bitcoin,
      name: "Bitcoin",
      code: "BTC",
      price: "GHS 295,202.53",
      change: +0.57,
      chart: chart,
    },
    {
      icon: ethereum,
      name: "Ethereum",
      code: "ETH",
      price: "GHS 24,010.42",
      change: +4.52,
      chart: chart,
    },
    {
      icon: bitcoinCash,
      name: "Litecoin",
      code: "LTC",
      price: "GHS 7,756.23",
      change: +2.32,
      chart: chart,
    },
    {
      icon: litecoin,
      name: "Bitcoin Cash",
      code: "BCH",
      price: "GHS 1.935.08",
      change: "+1.89%",
      chart: chart,
    },
  ];
  

  const Table = () => {
    return (
      <div className="Tablo">
        <div className="wrapper">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="index">#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Chart</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>
              {Lists.map((Lists, index) => {
                return (
                  <tr>
                    <td className="index">{index + 1}</td>
                    <td className="table__name">
                      <img src={Lists.icon} alt="logo" />
                      <h4 class="name">{Lists.name}</h4>
                      <h4 className="code">{Lists.code}</h4>
                    </td>
                    <td className="price">{Lists.price}</td>
                    <td className="change">{Lists.change}</td>
                    <td>
                      <img src={Lists.chart} alt="chart logo" />
                    </td>
                    <td>
                      <button class="buy">Buy</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;
