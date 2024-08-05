import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header, ProjectCard } from "../../components";
import projectsData from "../../data/Projects.json";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <React.Fragment>
      <Header title="Projects" />
      <Container fluid className={`${styles.container} ${styles.containerSize}`}>
        <Row className="justify-content-center mb-4">
          {/* <Col xs={12}>
            <h2 className={styles.subHeading}>Explore My Latest Work</h2>
          </Col> */}
        </Row>
        <Row className="justify-content-center">
          {projectsData.map((obj, index) => (
            <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch mb-4" key={index}>
              <ProjectCard
                title={obj.title}
                content={obj.content}
                gitHubUrl={obj.gitHubUrl}
                blogUrl={obj.blogUrl}  // Assuming `blogUrl` is included in the project data
                techStack={obj.techStack}
                imageUrl={obj.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
