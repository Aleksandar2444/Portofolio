import "./CoffeeApp.css";

const CoffeeApp = (props) => {
  return (
    <div className="my_card img-10">
      <div className="my_content">
        <p>QR-Coffee Application</p>
        <p>
          The modern caffees nowdays are more likely to use QR scanner to their
          products. This application will be in production very soon. Check the
          demo version by clicking "Visit Now" or visit the "Github Code".
        </p>
        <div className="a__links">
          <a
            href="https://coffeein-to-go.herokuapp.com/home"
            target="_blank"
            rel="noreferrer"
            className="btn-visit"
          >
            Visit Now
          </a>
          <a
            href="https://github.com/Aleksandar2444/QR-Code-Application"
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

export default CoffeeApp;
