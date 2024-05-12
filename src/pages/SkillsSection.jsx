import "react-multi-carousel/lib/styles.css";
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
              <div className="d-flex flex-wrap justify-content-evenly">
                <div>
                  <FaComputer size={60} className="my-1" />
                  <p>Cloud Computing</p>
                </div>
                <div>
                  <FaWrench size={60} className="my-1" />
                  <p>Infrastructure & Networking</p>
                </div>
                <div>
                  <FaServer size={60} className="my-1" />
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;