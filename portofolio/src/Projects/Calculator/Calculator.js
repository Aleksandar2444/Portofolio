import "./Calculator.css";
import calculator from "../../images/calculator.jpg";

const Calculator = (props) => {
  return (
    <div className="my_card">
      <div className="img-2">
        <img src={calculator} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p>Calculator App</p>
        <p>
          You can perform basic arithmetic calculations with this standard
          calculator.
        </p>
        <a
          href="https://github.com/Aleksandar2444/Projects-v1"
          target="_blank"
          rel="noreferrer"
          className="btn-visit"
        >
          Visit Now
        </a>
      </div>
    </div>
  );
};

export default Calculator;
