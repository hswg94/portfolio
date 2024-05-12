/* eslint-disable react/prop-types */
import { Col, Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, desc, images, url }) => {
  return (
    <>
      <Col lg={6} className="mb-5">
        <img src={images[0]} className="rounded"/>
      </Col>
      <Col lg={6} className="d-flex flex-column justify-content-center">
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={url} className="text-decoration-none">
          <Button variant="dark" className="p-3 align-items-center">
            View Project&nbsp; <FaExternalLinkAlt />
          </Button>
        </a>
      </Col>
    </>
  );
};
