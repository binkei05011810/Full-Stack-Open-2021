import React from 'react'

function Total(props) {
    const total = props.parts.reduce((sum, currentVal) => sum + currentVal.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;