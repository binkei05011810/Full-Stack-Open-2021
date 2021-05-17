import React from 'react';
import Person from './Person.js';

function Persons(props) {
    return (
        <div>
            {props.persons.map(person => {
                return <Person key={person.id} person={person} deletePerson={props.deletePerson} />
            })}
        </div>
    )
}

export default Persons;