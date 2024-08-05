import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = (props) => {
  const backgroundStyle = {
    Projects: styles.projects,
    "About Me": styles.about,
    "My Skills": styles.skills,
    Education: styles.education,
    Contact: styles.contact,
  };
  return (
    <Container
      fluid
      className={`${styles.container} ${backgroundStyle[props.title]}`}
    >
      <Row>
        <h1 className={styles.headingOne}>{props.title}</h1>
      </Row>
    </Container>
  );
};

export default Header;
