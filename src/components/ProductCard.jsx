/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function ProductCard({ title, price, imageUrl, addToCart, removeFromCart, productId, removedCartItemId, clearRemoveCartItemId }) {

  const [addToCardBtn, setAddToCardBtn] = useState(false);
  const [addToWishlistBtn, setAddToWishlistBtn] = useState(false);

  // console.log(productId);


  useEffect(() => {
    if (removedCartItemId == productId) {
      setAddToCardBtn(false);
      clearRemoveCartItemId();
    }
  }, [removedCartItemId]);


  const handleCartButton = () => {
    setAddToCardBtn(!addToCardBtn);
  }

  
  useEffect(() => {
    if (addToCardBtn) {
      addToCart();
    }
    else {
      removeFromCart(productId);
    }
  }, [addToCardBtn]);



  return (
    <div className="card">
      <button className="heart_icon_dev" onClick={() => setAddToWishlistBtn(!addToWishlistBtn)}>
        {
          addToWishlistBtn ?
            <div className="heartDiv">
              <svg height="15" width="15" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m8.5 1032.4c-3.0376 0-5.5 2.5-5.5 5.5 0 1.6 0.6167 2.9 1.5938 3.9 0.1337 0.2 0.2591 0.3 0.4062 0.5l7 7.1 7-7.1 0.344-0.4c1.013-1 1.656-2.4 1.656-4 0-3-2.462-5.5-5.5-5.5-1.329 0-2.549 0.4-3.5 1.2-0.951-0.8-2.1711-1.2-3.5-1.2z" fill="#c0392b" /><path d="m8.8889 1033.4c-2.7001 0-4.8889 2.2-4.8889 4.9 0 1.3 0.5481 2.5 1.4167 3.4 0.1188 0.2 0.2303 0.3 0.3611 0.4l6.2222 6.3 6.222-6.3 0.306-0.3c0.901-0.9 1.472-2.1 1.472-3.5 0-2.7-2.189-4.9-4.889-4.9-1.181 0-2.266 0.4-3.111 1.1-0.845-0.7-1.93-1.1-3.1111-1.1z" fill="#e74c3c" /></g></svg>
            </div> :
            <img width={15} height={15} src="/img/icons/heart_unliked.svg" alt="Heart" />
        }
      </button>
      <img width={240} height={240 / (1200 / 1600)} className="product" src={imageUrl} alt="ProductPicture" />
      <h5 className="title">{title}</h5>
      <div className="priceAndPlus">
        <div className="price">
          <span>Price</span>
          <b>{price} azn</b>
        </div>
        <button onClick={handleCartButton}>
          {
            addToCardBtn ?
              <div className="checkDiv">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="15" width="15" viewBox="-5 0 50 50">
                  <rect fill="white" fillOpacity="0" height="48" width="48" />
                  <path d="M43 11L16.875 37L5 25.1818" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></svg>
              </div> :
              <img width={15} height={15} src="/img/icons/plus.svg" alt="Plus" />
          }
        </button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  removedCartItemId: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearRemoveCartItemId: PropTypes.func,
}

export default ProductCard;