import "./ShareButton.css";

const ShareButton = (props) => {
  return (
    <div className="my_card img-4">
      <div className="my_content">
        <p>Share button</p>
        <p>This share button contains hidden icons. Try it out!</p>
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

export default ShareButton;
