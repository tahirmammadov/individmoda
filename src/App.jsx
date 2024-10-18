function App() {
  return (
    <div className="wrapper">

      <div style={{display: "none"}} className="overlay">
        <div className="drawer">
          <div className="cartHeadingAndClose">
            <h1>Cart</h1>
            <button className="cartCloseButton">
              <img width={18} height={18} src="/img/close_icon.svg" alt="CloseButton" />
            </button>
          </div>
          <div className="cartItems">
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/clothing/1.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/close_icon.svg" alt="CloseButton" />
              </button>
            </div>
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/clothing/2.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/close_icon.svg" alt="CloseButton" />
              </button>
            </div>
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/clothing/3.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/close_icon.svg" alt="CloseButton" />
              </button>
            </div>
            <div className="cartItem">
              <img className="cartItemImage" width={100} height={133} src="/img/clothing/4.jpeg" alt="CartProduct" />
              <div className= "description">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quo, numquam</h5>
                <b>85 azn</b>
              </div>
              <button className="cartItemCloseButton">
                <img width={15} height={15} src="/img/close_icon.svg" alt="CloseButton" />
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
              <img width={18} height={18}  src="/img/arrow_right_icon.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Individmoda</h3>
            <p>Women's Clothing & Fashion</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="li1">
            <img width={18} height={18} src="/img/cart_icon.svg" alt="Cart" />
            <span>1205 azn</span>
          </li>
          <li className="li2">
            <img width={18} height={18} src="/img/heart_unliked_icon.svg" alt="Heart" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user_icon.svg" alt="User" />
          </li>
        </ul>
      </header>



      <div className="content">
        <div className="headingAndSearch">
          <h1>All clothes</h1>
          <div className="searchBar">
            <img width={18} height={18} src="./img/search_icon.svg" alt="Search" />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <button className="heart_icon_dev">
              <img width={15} height={15} src="/img/heart_unliked_icon.svg" alt="Heart" />
            </button>
            <img width={240} height={240 / (1200 / 1600)} className="product" src="/img/clothing/1.jpeg" alt="ProductPicture" />
            <h5 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo accusantium architecto suscipit</h5>
            <div className="priceAndPlus">
              <div className="price">
                <span>Price</span>
                <b>85 azn</b>
              </div>
              <button className="plus_icon_dev">
                <img width={11} height={11} src="/img/plus_icon.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <button className="heart_icon_dev">
              <img width={15} height={15} src="/img/heart_unliked_icon.svg" alt="Heart" />
            </button>
            <img width={240} height={240 / (1200 / 1600)} className="product" src="/img/clothing/2.jpeg" alt="ProductPicture" />
            <h5 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo accusantium architecto suscipit</h5>
            <div className="priceAndPlus">
              <div className="price">
                <span>Price</span>
                <b>85 azn</b>
              </div>
              <button className="plus_icon_dev">
                <img width={11} height={11} src="/img/plus_icon.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <button className="heart_icon_dev">
              <img width={15} height={15} src="/img/heart_unliked_icon.svg" alt="Heart" />
            </button>
            <img width={240} height={240 / (1200 / 1600)} className="product" src="/img/clothing/3.jpeg" alt="ProductPicture" />
            <h5 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo accusantium architecto suscipit</h5>
            <div className="priceAndPlus">
              <div className="price">
                <span>Price</span>
                <b>85 azn</b>
              </div>
              <button className="plus_icon_dev">
                <img width={11} height={11} src="/img/plus_icon.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <button className="heart_icon_dev">
              <img width={15} height={15} src="/img/heart_unliked_icon.svg" alt="Heart" />
            </button>
            <img width={240} height={240 / (1200 / 1600)} className="product" src="/img/clothing/4.jpeg" alt="ProductPicture" />
            <h5 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo accusantium architecto suscipit</h5>
            <div className="priceAndPlus">
              <div className="price">
                <span>Price</span>
                <b>85 azn</b>
              </div>
              <button className="plus_icon_dev">
                <img width={11} height={11} src="/img/plus_icon.svg" alt="Plus" />
              </button>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default App