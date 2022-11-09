import "./Work.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Oryx from "../../Projects/Oryx/Oryx";
import Calculator from "../../Projects/Calculator/Calculator";
import ImageReflection from "../../Projects/ImageReflection/ImageReflection";
import ShareButton from "../../Projects/ShareButton/ShareButton";
import FindTheWord from "../../Projects/FindTheWord/FindTheWord";
import Cube from "../../Projects/3Dcube/Cube";
import ProgressBar from "../../Projects/ProgressBar/ProgressBar";
import CardReveal from "../../Projects/CardReveal/CardReveal";
import DigitalClock from "../../Projects/DigitalClock/DigitalClock";
import DailyFashion from "../../Projects/DailyFashion/DailyFashion";
import Countrypedia from "../../Projects/Countrypedia/Countrypedia";
import TodoRedux from "../../Projects/Todo-Redux/Todo";
import TodoProps from "../../Projects/Todo-Props/Todo";
import CoffeeApp from "../../Projects/QR-CoffeeApp/CoffeeApp";
import NgRx from "../../Projects/NgRx-Example/NgRx";
import Mean from "../../Projects/MEAN/Mean";
import RealTimeChatApp from "../../Projects/RealTimeChatApp/RealTimeChatApp";

const Work = (props) => {
  return (
    <div className="WorkPage">
      <div className="WorkPage__Container">
        <div className="leftside__details_work">
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
          <div className="h1__work">
            <h1>
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </h1>
          </div>
          <div className="html__tag_h1">
            <IoIosArrowBack />
            /h1
            <IoIosArrowForward />
          </div>
          <div className="html__tag_section">
            <IoIosArrowBack />
            section
            <IoIosArrowForward />
          </div>
          <div className="div_tag">
            <IoIosArrowBack />
            div
            <IoIosArrowForward />
          </div>
          <div className="my_container">
            <div className="main_projects">
              <span>Main projects</span>
              <div className="project_container">
                <Oryx />
                <CoffeeApp />
                <DailyFashion />
                <Countrypedia />
                <TodoRedux />
                <RealTimeChatApp />
                <NgRx />
                <Mean />
              </div>
            </div>
            <div className="projects_v1">
              <span>Projects_v1</span>
              <div className="project_container">
                <Calculator />
                <ImageReflection />
                <ShareButton />
                <FindTheWord />
                <Cube />
                <ProgressBar />
                <CardReveal />
                <DigitalClock />
                <TodoProps />
              </div>
            </div>
          </div>
          <div className="div_tag">
            <IoIosArrowBack />
            /div
            <IoIosArrowForward />
          </div>
          <div className="html__tag_section">
            <IoIosArrowBack />
            /section
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
      </div>
    </div>
  );
};

export default Work;
