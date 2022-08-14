import "./FindTheWord.css";
import findTheWord from "../../images/find-the-word.jpg";

const FindTheWord = (props) => {
  return (
    <div className="my_card">
      <div className="img-5">
        <img src={findTheWord} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p>Find The Word</p>
        <p>Funny game application that contains random hidden words.</p>
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

export default FindTheWord;
