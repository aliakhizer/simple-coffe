import "./CardContent.css";

const CardContent = ({ product }) => {
  console.log(product)
  return (
    <div className="card">
      <img className="card__img" src="/assets/bg-cafe.jpg" alt="cafe-image" />

      <div className="card__info">
        <div className="card__info--detail">
          <h3 className="card__title">cappucino</h3>
          <span className="card__price">5.20</span>
        </div>
        <div className="card__rating">
          <img className="card__img" src="/assets/Star.svg" alt="cafe-image" />

          <div className="rating-text">4.7</div>
        </div>
      </div>
    </div>
  );
};
export default CardContent;
