import React, { useState } from 'react';
import CountryDetail from './CountryDetail.js';

function SearchResult(props) {
    const [showDetail, setShowDetail] = useState(false);

    const show = () => {
        setShowDetail(!showDetail);
    }

    return (
        <div>
            {props.country.name}
            <button onClick={show}>show</button>

            {showDetail &&
                <CountryDetail country={props.country} />}
        </div>
    )
}

export default SearchResult;