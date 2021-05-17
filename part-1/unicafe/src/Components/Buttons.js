import React from 'react'

function Buttons(props) {
    return (
        <div>
            <button onClick={() => props.handleGood()}>good</button>
            <button onClick={() => props.handleNeutral()}>neutral</button>
            <button onClick={() => props.handleBad()}>bad</button>
        </div>
    )
}

export default Buttons;