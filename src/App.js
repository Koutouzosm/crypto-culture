import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(err => console.log(err))
  }, []);


  return (
    <div className="crypto-app">
    <div className="crypto-search">
      <h1 className="searchText"> Search a crypto currency
        <form>
          <input type="text" placeholder="Search" className="crypto-input"/>
        </form>
      </h1>
      </div> 

    </div>
  );
}

export default App;
