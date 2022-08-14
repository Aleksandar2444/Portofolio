import "./Cube.css";
import cube from "../../images/3D-cube.jpg";

const Cube = (props) => {
  return (
    <div className="my_card">
      <div className="img-6">
        <img src={cube} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p>3D Cube</p>
        <p>An infinite rotating 3D cube.</p>
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

export default Cube;
