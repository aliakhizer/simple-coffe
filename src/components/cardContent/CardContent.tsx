import "./CardContent.css";

const CardContent = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="card">
        <img className="card__img" src={product.image} alt="cafe-image" />
        {product.popular && <button className="popular">Popular</button>}
        <div className="card__info">
          <div className="card__info--detail">
            <h3 className="card__title">{product.name}</h3>
            <button className="card__price">
              <span>{product.price}</span>
            </button>
          </div>
          <div className="card__rating">
            <img
              className="rating__img"
              src="/assets/Star_fill.svg"
              alt="cafe-image"
            />

            <div className="rating-text">{product.rating}</div>

            <div className="votes">({product.votes} votes)</div>
            {!product.available && <div className="sold-out">Sold out</div>}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardContent;
