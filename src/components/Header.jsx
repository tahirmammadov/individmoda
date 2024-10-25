import PropTypes from "prop-types"
function Header({openCartDrawer}){
  return(
    <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Individmoda</h3>
            <p>Women's products & Fashion</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="li1" onClick = {openCartDrawer}>
            <img width={18} height={18} src="/img/icons/cart.svg" alt="Cart" />
            <span>1205 azn</span>
          </li>
          <li className="li2">
            <img width={18} height={18} src="/img/icons/heart_unliked.svg" alt="Heart" />
          </li>
          <li>
            <img width={18} height={18} src="/img/icons/user.svg" alt="User" />
          </li>
        </ul>
      </header>
  )
}

Header.propTypes = {
  openCartDrawer: PropTypes.func.isRequired
}

export default Header;