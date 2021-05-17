import React from 'react';

function Person(props) {
    const { id, name, number } = props.person;
    return (
        <div>
            {name} {number}
            <button onClick={() => props.deletePerson(id)}>delete</button>
        </div>
    )
}

export default Person;