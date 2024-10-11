function App() {
  return (
     <div className="wrapper">
      <header>
        <div className="header-left">
          <img width={50} height={50} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Individmoda</h3>
            <p>Women's Clothing & Fashion</p>
          </div>
        </div>
        <ul className="header-right">
          <li>
            <img width={15} height={15} src="/img/cart_icon.svg" alt="Cart" />
            <span>1205 azn</span>
          </li>
          <li>
            <img width={15} height={15} src="/img/user_icon.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All clothes</h1>
        ...
      </div>
     </div>
  )
}

export default App