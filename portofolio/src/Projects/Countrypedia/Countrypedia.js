import "./Countrypedia.css";

const Countrypedia = (props) => {
  return (
    <div className="my_card img-1-2">
      <div className="my_content">
        <p>Countrypedia</p>
        <p>
          Countrypedia app build with React looks like Wikipedia but only for
          countries😋.
        </p>
        <a
          href="https://github.com/Aleksandar2444/Projects-v2/tree/main/Countrypedia%20-%20React.js%20-%20Using%20Props/countrypedia"
          target="_blank"
          rel="noreferrer"
          className="btn-visit"
        >
          Github Code
        </a>
      </div>
    </div>
  );
};

export default Countrypedia;
