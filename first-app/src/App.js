import VoteComponent from "./VoteComponent.js";
import CounterComponent from "./CounterComponent.js";
import { useState, } from "react/cjs/react.development";
import { useImperativeHandle } from "react";
import TestComponent from "./Test.js"; d

function App() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState([]);
  const [heading, setHeading] = useState('CounterApp');

  const handleAdd = () => {
    let newArr = [...arr, name];
    setArr(newArr);
    setHeading("ABC")
    console.log("Arr, arr");
  }

  const handleGrp = () => {
    let newArr = [...arr, name, "AB", 2, 3, 4, 5];
    setArr(newArr);
    console.log("Arr, arr");
  }

  const handleDel = () => {
    let newArr = [];
    setArr([]);
    console.log("Arr, arr", newArr);
  }


  const handleChange = (e) => {
    setName(e.target.value)
    console.log("Arr, arr")
  };


  const mapper = (e) => {
    return <CounterComponent name={e} />
  }
  return (


    <div className="App">
      <h1>{heading}</h1>
      <h2> Here we are adding counters </h2>
      <TestComponent name="A" />
      {/* Array : [{arr.toString()}] */}
      <br />

      <br />
      <div className="headdiv">
        <input placeholder="Enter Text" onChange={handleChange} type="text" />
        <button className="addbtn" onClick={handleAdd}> AddCounter </button>
        <button className="delbtn" onClick={handleGrp}> AddCounterGrp </button>
        <button className="delbtn" onClick={handleDel}> Delete All </button>

      </div>
      <div className="bodydiv">
        {arr.map(mapper)}
      </div>
    </div>
  );
}

export default App;

