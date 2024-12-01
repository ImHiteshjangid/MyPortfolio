import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components";
import styles from "./Education.module.css";

// Import images
import msbshselogo from "../../assets/educationimages/Msbshse.png";
import mulogo from "../../assets/educationimages/MU.png";
import googlelogo from "../../assets/educationimages/Google_2015_logo.svg.png";
import MichiganUniversity from "../../assets/educationimages/University_of_Michigan.svg";
import courseralogo from "../../assets/educationimages/courseraLogo.png";
import Udemy from "../../assets/educationimages/Udemy New.png";

// Import data
import educationData from "../../data/Education.json";

// Map the image paths based on degree
const imagePaths = {
  "Bachelor of Science in Information Technology": mulogo,
  "Higher Secondary School Certificate (HSC)": msbshselogo,
  "Secondary School Certificate (SSC)": msbshselogo,
  "Google Data Analytics Professional Certificate": googlelogo,
  "Python For Everybody": MichiganUniversity,
  "Ultimate MySQL": Udemy,
};

const DetailCard = ({ logo, degree, institution, description, topics, showTopics }) => (
  <Col md={6} lg={4} className="d-flex justify-content-center">
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${degree} Logo`} className={styles.logo} />
      </div>
      <h3 className={styles.degree}>{degree}</h3>
      <h4 className={styles.institution}>{institution}</h4>
      <div className={styles.separator}></div>
      <p className={styles.description}>{description}</p>
      {showTopics && topics && topics.length > 0 && (
        <ul className={styles.topicsList}>
          {topics.map((topic, index) => (
            <li key={index} className={styles.topicItem}>{topic}</li>
          ))}
        </ul>
      )}
    </div>
  </Col>
);

const Education = () => {
  const updatedEducationData = educationData.map(item => ({
    ...item,
    logo: imagePaths[item.degree] || item.logo
  }));

  return (
    <React.Fragment>
      <Header title="Education" />
      <Container fluid className={styles.container}>
        <Row className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlightedLetter}>A</span>cademic <span className={styles.highlightedLetter}>J</span>ourney 📚
        </h2>
          <p className={styles.tagline}>
            Explore my educational achievements that have shaped my journey in IT and beyond.
          </p>
          {updatedEducationData
            .filter(item => item.type === "Academic")
            .map((item, index) => (
              <DetailCard
                key={index}
                logo={item.logo}
                degree={item.degree}
                institution={item.institution}
                description={item.description}
                topics={item.topics}
                showTopics={true} // Show topics for academic details
              />
            ))}
        </Row>
        <Row className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlightedLetter}>C</span>ertifications 🏅
        </h2>
        <p className={styles.tagline}>A showcase of certifications that highlight my skills and professional development.</p>
          {updatedEducationData
            .filter(item => item.type === "Certification")
            .map((item, index) => (
              <DetailCard
                key={index}
                logo={item.logo}
                degree={item.degree}
                institution={item.institution}
                description={item.description}
                showTopics={false} // Do not show topics for certifications
              />
            ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Education;
