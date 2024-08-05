import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components";
import data from "../../data/Skills.json";
import styles from './Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faCogs, faChartLine } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'firstServiceIcon': faDatabase,
  'secondServiceIcon': faCode,
  'thirdServiceIcon': faCogs,
  'fourthServiceIcon': faChartLine
};

const Skills = () => {
  return (
    <React.Fragment>
      <Header title="My Skills" />
      <Container className={styles.container}>
        <Row className={styles.skillsRow}>
          {data.skills.map((skill, index) => (
            <Col md={4} key={index} className={styles.skillCol}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <FontAwesomeIcon icon={iconMap[skill.iconClass]} size="3x" />
                </div>
                <h4 className={styles.skillTitle}>{skill.title}</h4>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className={styles.toolsRow}>
          {data.tools.map((toolCategory, index) => (
            <Col md={12} key={index} className={styles.toolCategoryCol}>
              <h5 className={styles.categoryTitle}>{toolCategory.category}</h5>
              <hr className={styles.categoryLine} />
              <div className={styles.logoContainer}>
                {toolCategory.items.map((item, i) => (
                  <div key={i} className={styles.toolLabel}>
                    <a href={item.link} className={styles.toolImageLink}>
                      <img alt={item.alt} src={item.src} className={styles.toolImage} />
                    </a>
                    <p className={styles.toolName}>{item.alt}</p>
                    <hr className={styles.toolLine} />
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
