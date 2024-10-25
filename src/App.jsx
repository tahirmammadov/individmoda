import React, { useState, useEffect } from 'react';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

function App() {
  const [catalogItems, setCatalogItems] = useState([]);
  const [cartDrawerState, setCartDrawerState] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://faux-api.com/api/v1/catalog_03883873690984574')
      .then((res) => {
        if(!res.ok){
          throw new Error ('Network response was not "ok"');
        }else{
          return res.json();
        }
      })
      .then((data) => {setCatalogItems(data.result)})
      .catch((error) => {console.error('Fetch error: ', error)});
  }, []);
  
  return (
    <div className="wrapper">

      {cartDrawerState&&<CartDrawer closeCartDrawer = {() => {setCartDrawerState(false)}}/>}

      <Header openCartDrawer = {() => {setCartDrawerState(true)}}/>

      <div className="content">
        <div className="headingAndSearch">
          <h1>All clothes</h1>
          <SearchBar getSearchValue = {(value) => setSearchValue(value)}/>
        </div>

        <div className="productCards">
          {catalogItems
          .filter((item) => {
            return item.title.includes(searchValue)})
          .map((item) => {
            return(
            <ProductCard
            key={item.id}
            title={item.title}
            price={Number(item.price)}
            imageUrl={item.imageUrl}
          />
          )
        })}
        </div>
      </div>

    </div>
  )
}

export default App