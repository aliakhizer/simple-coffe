import "./CustomBtn.css";

const CustomBtn = ({ text }) => (
  <button
    className={`button ${
      text === "All Products" ? "bg-grey" : "bg-transparent"
    }`}
  >
    {text}
  </button>
);
export default CustomBtn;
