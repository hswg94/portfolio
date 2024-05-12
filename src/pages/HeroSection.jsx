import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/icons/header-img.svg";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/images/color-sharp2.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const title = "Welcome to My Portfolio";
  const intro = "I'm William Gan";
  const introEssay = `I am a dedicated web developer with a focus on continuous improvement. I specialize in technologies such as ReactJS, Node.js, and Express.js. My journey is fueled by my desire to be an exceptional web developer, which pushes me across boundaries and staying ahead in the ever-evolving tech landscape. The next milestone on my journey involves mastering AWS, and I'm actively working towards achieving a certification in AWS Cloud.`;

  return (
    <section className="hero" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">{title}</span>
            <h1>{intro}</h1>
            <h3 className="text-grey"style={{ letterSpacing: '1px', fontWeight: '600' }}>
              <Typewriter
                words={[
                  `An Aspiring Solutions Architect`,
                  `A former Software Engineer`,
                  `A Self-Dedicated Learner`
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={20}
              />
            </h3>
            <p>{introEssay}</p>

            <a href="./files/Resume.pdf" className="text-decoration-none">
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
      <img className="z-n1 background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default HeroSection;
