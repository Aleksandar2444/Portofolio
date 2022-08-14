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
        <a
          href="https://dsw1-deploy.vercel.app/"
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

export default Oryx;
