import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SiVisualstudiocode } from "react-icons/si";
import socialsData from "../../data/socialsData";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="black" className="py-3 sticky-top">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home"><SiVisualstudiocode size={30} /></Navbar.Brand>
        <div className="d-flex gap-3 align-items-center">
          {socialsData.map(({icon: Icon, url}, index) => (
            <Nav.Link key={index} href={url}>
              <Icon size={30}/>
            </Nav.Link>
          ))}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
