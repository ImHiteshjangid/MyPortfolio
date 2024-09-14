import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaFacebook, FaGlobe, FaDev } from 'react-icons/fa';
import {
  FaYoutubeSquare,
  FaBehanceSquare,
  FaGithubSquare,
  FaFileDownload,
  FaTwitterSquare,
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaMedium,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  HomeBackground,
  ProfessionalHeadshot2, // Import the second image
} from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  const [profileImage, setProfileImage] = useState(ProfessionalHeadshot);

  return (
    <Container
      fluid
      className={styles.container}
      style={{ background: `url(${HomeBackground})` }}
      // style={{ backgroundColor: '#0a192f'  }}
    >
      {/* <Row>
        <Col>
          <img
            src={profileImage}
            onError={(e) => (e.target.src = FallbackProfessionalHeadshot)}
            alt="Professional Headshot of Hitesh Jangid"
            style={{
              width: "140px", // Adjust the width to make it slightly larger
              height: "140px", // Ensure the height matches for a square image
              borderRadius: "50%", // Make it circular
              border: "2px solid #ffffff", // Add a white border
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for depth
              margin: "20px auto", // Center the image and add some margin
              display: "block", // Ensure the image is a block element
            }}
            onMouseEnter={() => setProfileImage(ProfessionalHeadshot2)}
            onMouseLeave={() => setProfileImage(ProfessionalHeadshot)}
          />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <span
            style={{
              color: "#ff6347",
              fontSize: "2.8rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out, background 0.3s ease-in-out",
              display: "inline-block",
              padding: "1px 10px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0.0)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.background = "rgba(255, 255, 255, 0.0)"; // Slight background color on hover
              e.target.style.color = "#878787"; // Change color on hover
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.background = "rgba(0, 0, 0, 0.0)";
              e.target.style.color = "#ff6347"; // Revert color when not hovering
            }}
          >
            HITESH JANGID
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
           Seasoned Programmer with Extensive Expertise in Python, SQL, and Data Analysis, Committed to<br />Advancing a Career in Data Science and Artificial Intelligence.
          </span>
        </Col>
      </Row>
      <Row>
          <div className={styles.socialIcons}>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTwitter />
          </a>
          <a href="mailto:yourname@example.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaEnvelope />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebook />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGlobe />
          </a>
          <a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaDev />
          </a>
          </div>
      </Row>
      <Row>
        <Col>
        <a href="path/to/your/file.pdf" className={styles.downloadButton} download>
           Resume 📝
        </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
