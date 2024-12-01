import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDev,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import profileImage from "../../assets/images/profileimage.png";

const Home = () => {
  const roles = ["Data Analyst", "Python Developer 🐍", "AI & ML Enthusiast", "Data Science Aspirant"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        // Deleting characters
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        // Adding characters
        setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }

      // Check if typing/deleting is complete
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className={styles.homeContainer}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/homeBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container fluid className={styles.container}>
        <Row className={styles.heroSection}>
          <Col md={6} className={styles.heroText}>
            <h1 className={styles.name}>
              <span className={styles.highlight}>H</span>ITESH&nbsp; 
              <span className={styles.highlight}>J</span>ANGID
            </h1>
            <p className={styles.tagline}>{displayText}|</p>
            <p className={styles.description}>
              I specialize in SQL, Python, and Data Analysis, with a passion for
              uncovering insights and driving impactful decisions. Currently advancing a career in
              Data Science and Artificial Intelligence 🚀.
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="/Hitesh_Resume_New.pdf"
                download
                className={styles.ctaButton}
              >
                Download Resume
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Contact Me
              </a>
            </div>
          </Col>
          <Col md={6} className={styles.heroImage}>
            <img
              src={profileImage}
              alt="Hitesh Jangid"
              className={styles.profileImage}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.socialIcons}>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:yourname@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaEnvelope />
            </a>
            <a
              href="https://dev.to/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaDev />
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
