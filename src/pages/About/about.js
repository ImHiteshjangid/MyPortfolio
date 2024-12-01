import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components";
import styles from "./About.module.css";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  ProfessionalHeadshot2,
} from "../../assets";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  const [profileImage, setProfileImage] = useState(ProfessionalHeadshot);

  return (
    <React.Fragment>
      <Header title="About Me" />
      <Container fluid className={styles.aboutContainer}>
        <Container className={styles.innerContainer}>
          <Row className={styles.aboutRow}>
            <Col md={3} className={styles.imageCol}>
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
              <p className={styles.description}>
              Hi, I am <span className={styles.highlightedLetter}>Hitesh Jangid,</span> a dedicated programmer with a strong passion for advancing my career in data science, machine learning, and artificial intelligence. With a solid foundation in data analysis and proficiency in tools such as SQL, Python, R, and Power BI, I am committed to continuously refining my skills and adapting to the evolving landscape of these dynamic fields.
              </p>
              <p className={styles.description}>
              My journey in coding began in junior college, where I developed a fascination for data and technology. Through a combination of online courses, offline training, and extensive hands-on practice, I have cultivated a wealth of knowledge and experience. My numerous personal projects have not only reinforced my technical expertise but have also enabled me to learn valuable lessons that contribute to my professional growth.
              </p>
              <p className={styles.description}>
              I am particularly excited about the opportunity to contribute to innovative projects that generate meaningful insights and drive impactful outcomes. I look forward to engaging with forward-thinking teams & tackling challenging problems in the realms of data science and AI.
              </p>
              <Row className={styles.contactRow}>
                <Col md={12}>
                  <p className={styles.contactInfo}>
                    <strong>Gmail:</strong> Imhiteshjangid@gmail.com 
                  </p>
                  <p className={styles.contactInfo}>
                    <strong>Phone:</strong> +91 8928 240 540
                  </p>
                  <p className={styles.contactInfo}>
                    <strong>Location:</strong> Mumbai, Maharashtra
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Interests Section */}
          <Row className={styles.interestsRow}>
            <Col md={12} className={styles.interestsCol}>
            <h2 className={styles.headingInterests}>
              <span className={`${styles.highlightedLetter} ${styles.largeText}`}>IN</span>terests
            </h2>
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
                  <i className="fas fa-code"></i> Software Development
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-globe"></i> Web Development
                </span>
                <span className={styles.badge}>
                  <i className="fas fa-puzzle-piece"></i> Problem Solving
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
