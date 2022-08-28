import "./HomePage.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <div className="RigthSide__Container">
        <div className="rightside__details">
          <div className="html__tag">
            <IoIosArrowBack />
            html
            <IoIosArrowForward />
          </div>
          <div className="html__tag_body">
            <IoIosArrowBack />
            body
            <IoIosArrowForward />
          </div>
          <div className="html__tag_h1">
            <IoIosArrowBack />
            h1
            <IoIosArrowForward className="arrow_left" />
          </div>
          <div className="h1__info">
            <h1>
              <span>H</span>
              <span>i</span>
              <span>,</span>
            </h1>
            <h1>
              <span>I</span>
              <span>'</span>
              <span>m</span>
              <span className="A">A</span>
              <span>l</span>
              <span>e</span>
              <span>k</span>
              <span>s</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>a</span>
              <span>r</span>
              <span>,</span>
            </h1>
            <h1>
              <span>w</span>
              <span>e</span>
              <span>b</span>
              <span className="D">d</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span></span>e<span></span>
              <span>r</span>
            </h1>
          </div>
          <div className="html__tag_h1">
            <IoIosArrowBack />
            /h1
            <IoIosArrowForward />
          </div>
          <div className="html__tag_p">
            <IoIosArrowBack />
            p
            <IoIosArrowForward />
          </div>
          <div className="p__info">
            <p>Fullstack Developer</p>
            <div className="hero">
              <div className="static__text">I'am a</div>
              <ul className="dynamic__text">
                <li>
                  <span>Fullstack Developer</span>
                </li>
                <li>
                  <span>Positive person</span>
                </li>
                <li>
                  <span>fan of OpenAI</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="html__tag_p">
            <IoIosArrowBack />
            /p
            <IoIosArrowForward />
          </div>
          <div className="html__tag_button">
            <IoIosArrowBack />
            button
            <IoIosArrowForward />
          </div>
          <div className="button__info">
            <Link to="/contact" className="btn">
              Contact me!
            </Link>
          </div>
          <div className="html__tag_button">
            <IoIosArrowBack />
            /button
            <IoIosArrowForward />
          </div>
          <div className="html__tag_body">
            <IoIosArrowBack />
            /body
            <IoIosArrowForward />
          </div>
          <div className="html__tag">
            <IoIosArrowBack />
            /html
            <IoIosArrowForward />
          </div>
        </div>
        <div className="Icons__Container second">
          <ul className="social__icons">
            <li>
              <a
                href="https://www.linkedin.com/in/aleksandar-ichev-9aab41244/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Aleksandar2444?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/icevackow/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aleksandarichev/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="mailto: ackowwokca@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
