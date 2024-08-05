// about.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components";
import styles from "./About.module.css";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  ProfessionalHeadshot2, // Import the second image
  HomeBackground,
} from "../../assets";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  const [profileImage, setProfileImage] = useState(ProfessionalHeadshot);

  return (
    <React.Fragment>
      <Header title="About Me" />
      <Container fluid className={styles.aboutContainer}>
        <Container className={styles.innerContainer}>
          {/* About Me Section */}
          <Row className={styles.aboutRow}>
            <Col md={4} className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <img
                  src={profileImage}
                  onError={(e) => (e.target.src = FallbackProfessionalHeadshot)}
                  alt="Hitesh Jangid"
                  className={styles.profileImage}
                  onMouseEnter={() => setProfileImage(ProfessionalHeadshot2)}
                  onMouseLeave={() => setProfileImage(ProfessionalHeadshot)}
                />
              </div>
            </Col>
            <Col md={8} className={styles.textCol}>
              <h2 className={styles.heading}>𝐻𝑒𝑙𝑙𝑜! 𝑀𝑦 𝑛𝑎𝑚𝑒 𝑖𝑠 𝐻𝑖𝑡𝑒𝑠ℎ 𝐽𝑎𝑛𝑔𝑖𝑑,</h2>
              <p className={styles.description}>
                A focused and enthusiastic programmer with a keen interest in data science and artificial intelligence. Through comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. With a solid foundation in data analysis and expertise in programming languages such as Python, SQL, and R, I am committed to continually honing my skills and actively pursuing new challenges to drive my professional growth.
              </p>
              <p className={styles.description}>
                I embarked on my coding journey through a blend of online and offline courses, relentless practice, and numerous personal projects. It all began during my junior college years when I started learning about databases and software development. My fascination with data science and AI soon followed. Since then, I have been learning something new every day, thanks to the projects that have taught me valuable skills.
              </p>
            </Col>
          </Row>

          {/* Interests Section */}
          <Row className={styles.interestsRow}>
            <Col md={12} className={styles.interestsCol}>
              <h2 className={styles.headingInterests}>Interests</h2>
              <div className={styles.badgesContainer}>
                <span className={styles.badge}>
                  <i className="fas fa-chart-bar"></i> Data Analytics
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-database"></i> Data Science
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-robot"></i> Machine Learning
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-server"></i> Databases
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-chart-line"></i> Data Visualization
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-code"></i> Software Dev.
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-globe"></i> Web Development
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-puzzle-piece"></i> Problem Solving
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-lightbulb"></i> Innovation
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default About;
