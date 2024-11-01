import PropTypes from "prop-types";
import {useEffect, useRef} from 'react';

function CartDrawer({ cartItems, removeFromCart, closeCartDrawer }) {
  
  let cartDrawerRef = useRef();
  

  useEffect(() => {
    const handler = (e) => {
      if(!cartDrawerRef.current.contains(e.target)){
        closeCartDrawer();
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  });

  
  return (
    <div className="overlay">
      <div className="drawer" ref={cartDrawerRef}>
        <div className="cartHeadingAndClose">
          <h1>Cart</h1>
          <button className="cartCloseButton" onClick={closeCartDrawer}>
            <img width={18} height={18} src="/img/icons/close.svg" alt="CloseButton" />
          </button>
        </div>
        <div className="cartItems">
          {cartItems.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="imageAndDescription" >
                  <img className="cartItemImage" width={100} height={133} src={item.imageUrl} alt="CartProduct" />
                  <div className="description">
                    <h5>{item.title}</h5>
                    <b>{item.price} azn</b>
                  </div>
                </div>
                <button className="cartItemCloseButton" onClick={() => removeFromCart(item.id)}>
                  <img width={15} height={15} src="/img/icons/close.svg" alt="CloseButton" />
                </button>
              </div>
            )
          })}
        </div>
        <div className="cartTotals">
          <ul>
            <li>
              <span>Total: </span>
              <div></div>
              <b>1250 azn</b>
            </li>
            <li>
              <span>Tax 5%: </span>
              <div></div>
              <b>62.5 azn</b>
            </li>
          </ul>
          <button className="checkout">
            <div>Checkout</div>
            <img width={18} height={18} src="/img/icons/arrow_right.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

CartDrawer.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  closeCartDrawer: PropTypes.func.isRequired,
}

export default CartDrawer;