import React, {useState} from 'react';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

function App() {
  const [catalogItems, setCatalogItems] = useState([
    {
      "key": 1,
      "title": "Image1",
      "price": 65,
      "imgUrl": "./img/products/1.jpeg"
    },
    {
      "key": 2,
      "title": "Image2",
      "price": 75,
      "imgUrl": "./img/products/2.jpeg"
    },
    {
      "key": 3,
      "title": "Image3",
      "price": 85,
      "imgUrl": "./img/products/3.jpeg"
    },
    {
      "key": 4,
      "title": "Image4",
      "price": 95,
      "imgUrl": "./img/products/4.jpeg"
    }
  ]);
  
  return (
    <div className="wrapper">

      <CartDrawer />

      <Header />

      <div className="content">
        
        <div className="headingAndSearch">
          <h1>All clothes</h1>
          <SearchBar />
        </div>
        
        <div className="productCards">
          {catalogItems.map((item) => <ProductCard 
            key={item.key}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
          />)}
        </div>
      
      </div>

    </div>
  )
}

export default App