import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";
import {
  FaServer,
  FaComputer,
  FaWrench,
} from "react-icons/fa6";

const SkillsSection = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-box wow zoomIn">
              <h2>Skills</h2>
              <p>
                I bring a diverse set of skills to the table, honed through
                dedicated learning and practical application.
              </p>
              <div className="d-flex justify-content-evenly">
                <div>
                  <FaComputer size={80} className="my-1" />
                  <p>Cloud Computing</p>
                </div>

                <div>
                  <FaWrench size={80} className="my-1" />
                  <p>Infrastructure & Networking</p>
                </div>

                <div>
                  <FaServer size={80} className="my-1" />
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="z-n1 background-image-left"
        src={colorSharp}
        alt="Image"
      />
    </section>
  );
};

export default SkillsSection;