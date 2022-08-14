import "./CardReveal.css";

const CardReveal = (props) => {
  return (
    <div className="my_card img-8">
      <div className="my_content">
        <p>Card Reveal</p>
        <p>
          Arthas Menethil is a fictional character who appears in the Warcraft
          series of video games by Blizzard Entertainment. Read more on this
          simple card reveal style.
        </p>
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

export default CardReveal;
