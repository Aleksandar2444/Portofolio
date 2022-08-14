import "./ImageReflection.css";
import imgReflection from "../../images/image-reflection.jpg";

const ImageReflection = (props) => {
  return (
    <div className="my_card">
      <div className="img-3">
        <img src={imgReflection} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p>Image Reflection</p>
        <p>A simple image reflection</p>
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

export default ImageReflection;
