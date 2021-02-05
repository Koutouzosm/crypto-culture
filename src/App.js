import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './components/Coin/Coin';



function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(err => console.log(err))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }
  
  // filtering coins changing any chars into lower case to match
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="searchText"> Search a crypto currency
        <form>
            <input type="text" placeholder="Search" className="crypto-input" onChange={handleChange} />
          </form>
        </h1>
      </div>
      {filteredCoins.map(coin => {
        return <Coin
        key={coin.id}
        name={coin.name}
        image={coin.image}
        symbol={coin.symbol}
        volume={coin.market_cap}
      />
      })}
      
    </div>
  );
}

export default App;
