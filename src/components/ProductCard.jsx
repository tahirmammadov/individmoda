import PropTypes from 'prop-types';

function ProductCard({title, price, imgUrl}){
  console.log(title, price, imgUrl);
  return(
    <div className="card">
    <button className="heart_icon_dev">
      <img width={15} height={15} src="/img/icons/heart_unliked.svg" alt="Heart" />
    </button>
    <img width={240} height={240 / (1200 / 1600)} className="product" src={imgUrl} alt="ProductPicture" />
    <h5 className="title">{title}</h5>
    <div className="priceAndPlus">
      <div className="price">
        <span>Price</span>
        <b>{price} azn</b>
      </div>
      <button className="plus_icon_dev">
        <img width={11} height={11} src="/img/icons/plus.svg" alt="Plus" />
      </button>
    </div>
  </div>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default ProductCard;