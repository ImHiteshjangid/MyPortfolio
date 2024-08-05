import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components";
import styles from "./Education.module.css";

// Import images
import msbshselogo from "../../assets/educationimages/Msbshse.png";
import mulogo from "../../assets/educationimages/MU.png"; // Update the filename as needed
import googlelogo from "../../assets/educationimages/Google_2015_logo.svg.png"; // Update the filename as needed

// Import data
import educationData from "../../data/Education.json";

// Map the image paths
const imagePaths = {
  "D.V.V High School": msbshselogo,
  "Vidya Niketan Jr. College": mulogo,
  "Coursera": googlelogo
};

const DetailCard = ({ logo, degree, institution, description, topics }) => (
  <Col md={6} lg={4} className="d-flex justify-content-center">
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${institution} Logo`} className={styles.logo} />
      </div>
      <h3 className={styles.degree}>{degree}</h3>
      <h4 className={styles.institution}>{institution}</h4>
      <div className={styles.separator}></div>
      <p className={styles.description}>{description}</p>
      {topics && topics.length > 0 && (
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
  // Map the JSON data with the image imports
  const updatedEducationData = educationData.map(item => ({
    ...item,
    logo: imagePaths[item.institution] || item.logo // Use the imported logo if available
  }));

  return (
    <React.Fragment>
      <Header title="Education" />
      <Container fluid className={styles.container}>
        <Row className={styles.section}>
          <h2 className={styles.sectionTitle}>Academic Details</h2>
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
              />
            ))}
        </Row>
        <Row className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          {updatedEducationData
            .filter(item => item.type === "Certification")
            .map((item, index) => (
              <DetailCard
                key={index}
                logo={item.logo}
                degree={item.degree}
                institution={item.institution}
                description={item.description}
                topics={item.topics}
              />
            ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Education;
