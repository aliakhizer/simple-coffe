import CustomBtn from "../../components/button/CustomBtn";
import "./HeaderContent.css";

const HeaderContent = () => {
  return (
    <>
      <img className="headerImage" src="/assets/vector.svg" alt="" />
      <header className="header">
        <h1 className="header__title">Our Collection</h1>
        <p className="header__subtitle">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="header__buttons">
          <CustomBtn text="All Products" />
          <CustomBtn text="Available Now" />
        </div>
      </header>
    </>
  );
};
export default HeaderContent;
