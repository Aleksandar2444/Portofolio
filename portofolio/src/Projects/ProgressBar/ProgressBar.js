import "./ProgressBar.css";
import progressBar from "../../images/progress-bar.jpg";

const ProgressBar = (props) => {
  return (
    <div className="my_card">
      <div className="img-7">
        <img src={progressBar} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p>Progress Bar</p>
        <p>Nice looking rounded progress bars.</p>
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

export default ProgressBar;
