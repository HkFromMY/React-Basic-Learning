import React from 'react'

export default function Dice({ dice, toggleFreeze }) {
    return (
        <div 
            className={ "tenzies-dice" + (dice.isFreeze ? " frozen" : "")} 
            onClick={() => toggleFreeze(dice.id, dice.number)}
        >
            <h1>{ dice.number }</h1>
        </div>
    );
}