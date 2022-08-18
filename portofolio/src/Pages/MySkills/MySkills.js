import "./MySkills.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ReferenceLetter from "../../Components/RefLetter/RefLetter";

const MySkills = (props) => {
  return (
    <div className="MySkills__Page">
      <div className="LeftSide__Container_myskills">
        <div className="leftside__details_myskills">
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
          <div className="h1__myskills">
            <h1>
              <span>S</span>
              <span>k</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>
              <span>s</span>
              <span className="and_myskills">&</span>
              <span>E</span>
              <span>x</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>c</span>
              <span>e</span>
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
          <div className="p__myskills">
            <p>
              Since beginning my jurney as a developer I've collaborated with
              talented people and created web products for both business and
              consumer use.
            </p>
            <p>
              I created successful responsive websites that are fast, easy to
              use, and built with best practices. My main area is full-stack
              development. I have development experiences in (HTML5, CSS, SASS,
              JavaScript(ES6), jQuery, Bootstrap, Github, React.js, Next.js,
              Angular, Firebase, TypeScript, Node.js, Express.js, SQL, MongoDB,
              Mongoose ODM) building web apps, custom plugins, features,
              animations and coding interactive layouts.
            </p>
            <span>Education</span>
            <p>Seavus Education and Development Center</p>
            <p>2021-2022 / Skopje</p>
            <p>Full-stack Web Development</p>
            <p>
              Visit my{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/aleksandar-ichev-9aab41244/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>{" "}
              or{" "}
              <span>
                <a
                  href="https://github.com/Aleksandar2444?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>{" "}
              profile for more details or just{" "}
              <Link to="/contact" className="navigate_to_contact">
                contact
              </Link>{" "}
              me.
            </p>
          </div>
          <div className="html__tag_p">
            <IoIosArrowBack />
            /p
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
        <div className="rightside__details_myskills">
          <div className="chart">
            <span>Front-end</span>
            <div className="progress">
              <div className="bar-1"></div>
            </div>
          </div>
          <div className="chart">
            <span>Back-end</span>
            <div className="progress">
              <div className="bar-2"></div>
            </div>
          </div>
          <div className="chart">
            <span>ReactJS</span>
            <div className="progress">
              <div className="bar-3"></div>
            </div>
          </div>
          <div className="chart">
            <span>NextJS</span>
            <div className="progress">
              <div className="bar-4"></div>
            </div>
          </div>
          <div className="chart">
            <span>NodeJS</span>
            <div className="progress">
              <div className="bar-5"></div>
            </div>
          </div>
          <div className="chart">
            <span>Angular</span>
            <div className="progress">
              <div className="bar-6"></div>
            </div>
          </div>
          <div className="achivements">
            <ReferenceLetter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
