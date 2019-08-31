import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/search-bar';
import RateList from './components/rateList/rateList';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <div className="rateList" >
      <RateList/>
      </div>
    </div>
  );
}

export default App;
