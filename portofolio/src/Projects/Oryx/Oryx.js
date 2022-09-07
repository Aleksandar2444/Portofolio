import "./Oryx.css";

const Oryx = (props) => {
  return (
    <div className="my_card img-1">
      <div className="my_content">
        <p>Oryx - Fashion Store</p>
        <p>
          Drop Shipping is becoming very popular and it's a great way to start a
          small business without owning a product line, a brand, or a
          manufacturing facility.
        </p>
        <div className="a__links">
          <a
            href="https://dsw1-deploy.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-visit"
          >
            Visit Now
          </a>
          <a
            href="https://github.com/Aleksandar2444/Projects-v2/tree/main/ORYX%20-%20Buy%20now%20or%20cry%20later"
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

export default Oryx;
