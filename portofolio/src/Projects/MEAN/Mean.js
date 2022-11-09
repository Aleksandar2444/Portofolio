import "./Mean.css";

const Mean = (props) => {
  return (
    <div className="my_card img-12">
      <div className="my_content">
        <p>MEAN posts aggregation, thought exchange, and discussion website.</p>
        <p>
          This application is build with MongoDB, Express, Angular and Nodejs.
        </p>
        <div className="a__links">
          <a
            href="https://github.com/Aleksandar2444/Network-Community"
            target="_blank"
            rel="noreferrer"
            className="btn-visit"
          >
            Github Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mean;
