import "react-multi-carousel/lib/styles.css";
import {
  FaAws,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { TbInfinity } from "react-icons/tb";

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
                <div className="skill-item">
                  <FaAws size={60} className="my-1" />
                  <p>Cloud Computing</p>
                </div>
                <div className="skill-item">
                  <SiKubernetes size={60} className="my-1" />
                  <p>Kubernetes</p>
                </div>
                <div className="skill-item">
                  <TbInfinity size={60} className="my-1" />
                  <p>CI/CD</p>
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