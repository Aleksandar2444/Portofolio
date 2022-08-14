import "./Timer.css";
import timer from "../../images/timer.jpg";

const Timer = (props) => {
  return (
    <div className="my_card">
      <div className="img-10">
        <img src={timer} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p className="timer-p">Timer</p>
        <p>
          In free time you can experiment anything you want to achieve. Better
          don't take that free time 😂.
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

export default Timer;
