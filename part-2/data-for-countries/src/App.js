import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetail from './Components/CountryDetail.js';
import SearchResult from './Components/SearchResult.js';

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [found, setFound] = useState(true);

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value);
  }

  useEffect(() => {
    setFound(true);
    if (search) {
      axios.get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then((data) => setSearchResults(data.data))
        .catch((e) => setFound(false))
    }
  }, [search])

  const renderSearch = () => {
    if (found) {
      if (searchResults.length === 1) {
        return <CountryDetail country={searchResults[0]} />
      } else if (searchResults.length <= 10) {
        return (
          <div>
            {searchResults.map((country, i) => {
              return <SearchResult key={i} country={country} />
            })}
          </div>
        )
      } else {
        return <p>Two many matches, specify another filter</p>
      }
    } else {
      return <p>No match!</p>
    }
  }

  return (
    <div className="App">
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
      {renderSearch()}
    </div>
  );
}

export default App;
