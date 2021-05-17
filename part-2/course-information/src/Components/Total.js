import React from 'react'

function Total(props) {
    const total = props.parts.reduce((sum, currentVal) => sum + currentVal.exercises, 0)
    return (
        <p><b>total of {total} exercises</b></p>
    )
}

export default Total;