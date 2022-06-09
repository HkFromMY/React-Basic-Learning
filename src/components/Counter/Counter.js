import React from 'react';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        // state changing with callback function
        // best practice is to use callback to change state value using old state
        // everytime you need to determine new state value using old state value, the best practice is to use a callback function in the setState
        setCount((prevCount) => {
            return prevCount+ 1;
        });
    }
    
    function subtract() {
        setCount((prevCount) => {
            if (prevCount > 0)
                return prevCount - 1;
            return prevCount;
        })
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}