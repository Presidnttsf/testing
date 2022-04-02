import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function CounterComponent(prop) {
    const [count, setCount] = useState(0);

    const handPlus = () => {
        setCount(count + 1);

    }

    const handMinus = () => {
        setCount(count - 1);

    }
    const handleReset = () => {
        setCount(0);

    }

    return (
        <div className="counterDiv">

            <span className="title"> {prop.name + ' : '}</span>

            <button className="btnRound btnMinus" onClick={handMinus}> - </button>

            <span className="count">{count} </span>

            <button className="btnRound btnPlus" onClick={handPlus}> + </button>
            <button className="btnReset addbtn" onClick={handleReset}> RESET </button>

        </div>

    );
};

export default CounterComponent;