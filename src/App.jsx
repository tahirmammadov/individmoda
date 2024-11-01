import React, { useState, useEffect } from 'react';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

function App() {
  const [catalogItems, setCatalogItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartDrawerState, setCartDrawerState] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [removedCartItemId, setRemovedCartItemId] = useState(0);

  console.log(cartItems);
  console.log(removedCartItemId);

  useEffect(() => {
    fetch('https://faux-api.com/api/v1/catalog_03883873690984574')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not "ok"');
        } else {
          return res.json();
        }
      })
      .then((data) => { setCatalogItems(data.result) })
      .catch((error) => { console.error('Fetch error: ', error) });
  }, []);

  const addToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  const removeFromCart = (id) => {
    setRemovedCartItemId(id);
    
    // 1-st option
    // setCartItems(prev => prev.filter((item) => item.id != id));

    // 2-nd option
    let newCartItems = [];
    cartItems.map((item) => {
      if (item.id != id)
        newCartItems.push(item);
    })
    setCartItems(newCartItems);
    
  }

  return (
    <div className="wrapper">

      {cartDrawerState && 
      <CartDrawer 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        closeCartDrawer={() => { setCartDrawerState(false) }} />}

      <Header openCartDrawer={() => { setCartDrawerState(true) }} />

      <div className="content">
        <div className="headingAndSearch">
          <h1>All clothes</h1>
          <SearchBar getSearchValue={(value) => setSearchValue(value)} />
        </div>

        <div className="productCards">
          {catalogItems
            .filter((item) => {
              return item.title.includes(searchValue)
            })
            .map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={Number(item.price)}
                  imageUrl={item.imageUrl}
                  productId={item.id}
                  removedCartItemId={removedCartItemId}
                  clearRemoveCartItemId={()=>setRemovedCartItemId(0)}
                  addToCart={() => addToCart(item)}
                  removeFromCart={removeFromCart}
                // {...item}
                />
              )
            })}
        </div>
      </div>

    </div>
  )
}

export default App