import React from 'react';
import './Tenzies.css';
import Dice from './Dice';

export default function Tenzies() {
    const [rollCount, setRollCount] = React.useState(0);
    const [win, setWin] = React.useState(false);
    const [latestNumber, setLatestNumber] = React.useState(0);
    const [dices, setDices] = React.useState(() => {
        let initialDices = [];
        for (let i = 0; i < 10; i++) {
            initialDices.push({
                id: i,
                number: Math.floor((Math.random() * 6) + 1),
                isFreeze: false
            });
        }
        return initialDices;
    });

    // check win condition
    React.useEffect(() => {
        setWin(dices.every((dice) => {
            return dice.number === latestNumber && dice.isFreeze;
        }));
    }, [latestNumber, dices]);

    function toggleFreeze(id, number) {
        setDices((oldDices) => {
            return oldDices.map((oldDice) => {
                if (oldDice.id === id) {
                    oldDice = {
                        ...oldDice,
                        isFreeze: !oldDice.isFreeze
                    }
                }
                return oldDice;
            });
        });
        setLatestNumber(number);
    }

    function rollDices() {
        setDices((oldDices) => {
            return oldDices.map((dice) => {
                if (dice.isFreeze)
                    return dice;
    
                return {
                    ...dice,
                    number: Math.floor((Math.random() * 6) + 1)
                };
            })
        });
        setRollCount(oldRollCount => oldRollCount + 1);
    }

    function resetDices() {
        let initialDices = [];
        for (let i = 0; i < 10; i++) {
            initialDices.push({
                id: i,
                number: Math.floor((Math.random() * 6) + 1),
                isFreeze: false
            });
        }
        
        setDices(initialDices);
        setLatestNumber(0);
        setRollCount(0);
    }

    return (
        <div className="tenzies-container">
            <h1 className="tenzies-title">Tenzies</h1>
            <p className="tenzies-description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="tenzies-dices">
                {
                    dices.map(dice => <Dice key={dice.id} dice={dice} toggleFreeze={toggleFreeze} />)
                }
            </div>
            <div className="wrapper-button">
                <button
                    className="tenzies-button"
                    onClick={ win ? resetDices : rollDices }
                >
                    { win ? "Reset Game" : "Roll" }
                </button>
            </div>

            {
                win && 
                <div className="tenzies-win--banner">
                    <h1>Congratulation you win! You have rolled { rollCount } times.</h1>
                </div>
            }
        </div>
    );
}