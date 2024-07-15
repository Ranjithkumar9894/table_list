import React, { useState, useEffect } from "react";
import "./index.css";

const initialData = [
  {
    state: "KA",
    city: "Bangalore",
    fan: 14592,
    light: 7496,
    tv: 22081,
    washingMachine: 10238,
    mixer: 2500,
    pipe: 7500,
    showTab: 10000,
    grandTotal: 42346
  },
  {
    state: "KA",
    city: "Mangalore",
    fan: 1598,
    light: 11047,
    tv: 3575,
    washingMachine: 16220,
    mixer: 3633,
    pipe: 5466,
    showTab: 3500,
    grandTotal: 28819
  },
  {
    state: "KA",
    city: "Mysore",
    fan: 1598,
    light: 11047,
    tv: 3575,
    washingMachine: 16220,
    mixer: 3633,
    pipe: 5466,
    showTab: 3500,
    grandTotal: 28819
  },
  {
    state: "KA Total",
    city: "",
    fan: 0,
    light: 0,
    tv: 0,
    washingMachine: 0,
    mixer: 0,
    pipe: 0,
    showTab: 0,
    grandTotal: 0
  },
  {
    state: "TN",
    city: "Coimbatore",
    fan: 14592,
    light: 7496,
    tv: 22081,
    washingMachine: 10238,
    mixer: 2500,
    pipe: 7500,
    showTab: 10000,
    grandTotal: 42346
  },
  {
    state: "TN",
    city: "Madurai",
    fan: 1598,
    light: 11047,
    tv: 3575,
    washingMachine: 16220,
    mixer: 3633,
    pipe: 5466,
    showTab: 3500,
    grandTotal: 28819
  },
  {
    state: "TN Total",
    city: "",
    fan: 0,
    light: 0,
    tv: 0,
    washingMachine: 0,
    mixer: 0,
    pipe: 0,
    showTab: 0,
    grandTotal: 0
  },
  {
    state: "MH",
    city: "Mumbai",
    fan: 14592,
    light: 7496,
    tv: 22081,
    washingMachine: 10238,
    mixer: 2500,
    pipe: 7500,
    showTab: 10000,
    grandTotal: 42346
  },
  {
    state: "MH",
    city: "Pune",
    fan: 1598,
    light: 11047,
    tv: 3575,
    washingMachine: 16220,
    mixer: 3633,
    pipe: 5466,
    showTab: 3500,
    grandTotal: 28819
  },
  {
    state: "MH Total",
    city: "",
    fan: 0,
    light: 0,
    tv: 0,
    washingMachine: 0,
    mixer: 0,
    pipe: 0,
    showTab: 0,
    grandTotal: 0
  }
];

const App = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    updateTotals();
  }, []);

  const updateTotals = () => {
    const kaTotals = calculateStateTotals("KA");
    const tnTotals = calculateStateTotals("TN");
    const mhTotals = calculateStateTotals("MH");

    const updatedData = [...data];

    const kaTotalIndex = updatedData.findIndex(
      (row) => row.state === "KA Total"
    );
    if (kaTotalIndex !== -1) {
      updatedData[kaTotalIndex] = {
        ...updatedData[kaTotalIndex],
        ...kaTotals
      };
    }

    const tnTotalIndex = updatedData.findIndex(
      (row) => row.state === "TN Total"
    );
    if (tnTotalIndex !== -1) {
      updatedData[tnTotalIndex] = {
        ...updatedData[tnTotalIndex],
        ...tnTotals
      };
    }
    const mhTotalIndex = updatedData.findIndex(
      (row) => row.state === "MH Total"
    );
    if (mhTotalIndex !== -1) {
      updatedData[mhTotalIndex] = {
        ...updatedData[mhTotalIndex],
        ...tnTotals
      };
    }
    setData(updatedData);
  };

  const calculateStateTotals = (state) => {
    let fanTotal = 0;
    let lightTotal = 0;
    let tvTotal = 0;
    let washingMachineTotal = 0;
    let mixerTotal = 0;
    let pipeTotal = 0;
    let showTabTotal = 0;
    let grandTotal = 0;

    data.forEach((row) => {
      if (row.state === state) {
        fanTotal += row.fan;
        lightTotal += row.light;
        tvTotal += row.tv;
        washingMachineTotal += row.washingMachine;
        mixerTotal += row.mixer;
        pipeTotal += row.pipe;
        showTabTotal += row.showTab;
        grandTotal += row.grandTotal;
      }
    });

    return {
      fan: fanTotal,
      light: lightTotal,
      tv: tvTotal,
      washingMachine: washingMachineTotal,
      mixer: mixerTotal,
      pipe: pipeTotal,
      showTab: showTabTotal,
      grandTotal: grandTotal
    };
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>City</th>
            <th>Fan</th>
            <th>Light</th>
            <th>TV</th>
            <th>Washing Machine</th>
            <th>Mixer</th>
            <th>Pipe</th>
            <th>Show Tab</th>
            <th>Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.state}</td>
              <td>{row.city}</td>
              <td>{row.fan}</td>
              <td>{row.light}</td>
              <td>{row.tv}</td>
              <td>{row.washingMachine}</td>
              <td>{row.mixer}</td>
              <td>{row.pipe}</td>
              <td>{row.showTab}</td>
              <td>{row.grandTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
