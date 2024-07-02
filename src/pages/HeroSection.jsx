import { Container, Row, Col } from "react-bootstrap";
const headerImg = "./images/dev.svg";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Typewriter } from "react-simple-typewriter";

const colorRight = './images/background/colorRight.webp';

const HeroSection = () => {
  const title = "Welcome to My Portfolio";
  const intro = "I'm William Gan";
  const introEssay = `I embarked on my career as a software engineer and have since transitioned into an aspiring cloud architect. My journey was initially fueled by a passion for excelling as a web developer, which inspired me to continuously push boundaries and stay ahead in the ever-evolving tech landscape. Currently, I'm concentrating on honing my skills in cloud computing, with the next milestone on my journey being mastery of AWS.`;

  return (
    <section className="hero" id="home">
      <img className="z-n1 background-image-right" src={colorRight}></img>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">{title}</span>
            <h1>{intro}</h1>
            <h3
              className="text-grey"
              style={{ letterSpacing: "1px", fontWeight: "600" }}
            >
              <Typewriter
                words={[
                  `An Aspiring Solutions Architect`,
                  `A former Software Engineer`,
                  `A Dedicated Self-Learner`,
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={20}
              />
            </h3>
            <p>{introEssay}</p>

            <a
              href="./files/Resume.pdf"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Download Resume <ArrowDownCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;