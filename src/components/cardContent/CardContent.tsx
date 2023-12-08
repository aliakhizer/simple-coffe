import "./CardContent.css";

const CardContent = ({ product }) => {
  console.log(product);
  return (
    <>
    <div className="card">

      <img className="card__img" src={product.image} alt="cafe-image" />

      <div className="card__info">
        <div className="card__info--detail">
          <h3 className="card__title">{product.name}</h3>
          <span className="card__price">{product.price}</span>
        </div>
        <div className="card__rating">
          <img
            className="rating__img"
            src="/assets/Star_fill.svg"
            alt="cafe-image"
            />

          <div className="rating-text">{product.rating}</div>
        </div>
      </div>
    </div>
            </>
  );
};
export default CardContent;
