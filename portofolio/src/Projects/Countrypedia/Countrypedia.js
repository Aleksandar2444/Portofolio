import "./Countrypedia.css";

const Countrypedia = (props) => {
  return (
    <div className="my_card img-1-2">
      <div className="my_content">
        <p>Countrypedia</p>
        <p>
          Countrypedia app build with React looks like Wikipedia but for
          countries only 😋.
        </p>
        <a
          href="https://github.com/Aleksandar2444/Projects-v2"
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

export default Countrypedia;
