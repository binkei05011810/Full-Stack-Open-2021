import React from 'react';
import Part from './Part.js'

function Content(props) {
    return (
        <div>
            {props.parts.map(part => {
                return (
                    <Part part={part.name} exercises={part.exercises} />
                )
            })}
        </div>
    )
}

export default Content;