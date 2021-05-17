import React from 'react';

function Filter(props) {
    return (
        <div>
            <div>
                Filter shown with: <input value={props.search} onChange={props.handleSearchChange} />
            </div>
            <div>
                <h3>Search result:</h3>
                {props.searchResults.map(person => {
                    return <p key={person.name}>{person.name} {person.number}</p>
                })}
            </div>
        </div>
    )
}

export default Filter;