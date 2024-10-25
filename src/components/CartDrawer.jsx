import PropTypes from "prop-types"
function CartDrawer({closeCartDrawer}){
  return(
    <div className="overlay">
        <div className="drawer">
          <div className="cartHeadingAndClose">
            <h1>Cart</h1>
            <button className="cartCloseButton" onClick={closeCartDrawer}>
              <img width={18} height={18} src="/img/icons/close.svg" alt="CloseButton" />
            </button>
          </div>
          <div className="cartItems">
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/products/1.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/icons/close.svg" alt="CloseButton" />
              </button>
            </div>
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/products/2.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/icons/close.svg" alt="CloseButton" />
              </button>
            </div>
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/products/3.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/icons/close.svg" alt="CloseButton" />
              </button>
            </div>
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/products/4.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/icons/close.svg" alt="CloseButton" />
              </button>
            </div>
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
              <img width={18} height={18}  src="/img/icons/arrow_right.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
  )
}

CartDrawer.propTypes = {
  closeCartDrawer: PropTypes.func.isRequired
}

export default CartDrawer;