import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components";
import data from "../../data/Skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <React.Fragment>
      <Header title="My Skills" />
      <Container className={styles.container}>
      <h2 className={styles.pageTitle}>
        <span className={`${styles.highlight} ${styles.largeText}`}>S</span>KILLS AND &nbsp;
        <span className={`${styles.highlight} ${styles.largeText}`}>E</span>XPERTIES
      </h2>
        <Row className={styles.skillsRow}>
          {data.skills.map((skill, index) => (
            <Col md={4} sm={6} key={index} className={styles.skillCol}>
              <div className={styles.skillCard}>
                {/* <div className={styles.skillImageContainer}>
                  <img 
                    src={skill.image} 
                    alt={skill.title} 
                    className={styles.skillImage} 
                  />
                </div> */}
                <h4 className={styles.skillTitle}>{skill.title}</h4>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <h3 className={styles.toolsTitle}>
          <span className={`${styles.highlight} ${styles.largeText}`}>T</span>OOLS AND 
          <span className={`${styles.highlight} ${styles.largeText}`}> TECH</span>NOLOGIES
        </h3>
        <Row className={styles.toolsRow}>
          {data.tools.map((toolCategory, index) => (
            <Col md={12} key={index} className={styles.toolCategoryCol}>
              <h5 className={styles.categoryTitle}>{toolCategory.category}</h5>
              <div className={styles.logoContainer}>
                {toolCategory.items.map((item, i) => (
                  <div key={i} className={styles.toolLabel}>
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className={styles.toolImage} 
                    />
                    {/* <p className={styles.toolName}>{item.alt}</p> */}
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Skills;
