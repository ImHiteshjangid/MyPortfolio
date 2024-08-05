import React from 'react';
import styles from './contact.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaFacebook, FaGlobe, FaDev } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Contact Me</h2>
      <div className={styles.contactContent}>
        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" className={styles.input} placeholder="Your Name ..." />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="Your Email ..." />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} placeholder="Your Message ..." />
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        <div className={styles.contactDetails}>
          <h3 className={styles.subHeading}>Get in Touch</h3>
          <p className={styles.contactDetail}>
            <FaEnvelope className={styles.iconDetail} /> Imhiteshjangid@gmail.com
          </p>
          <p className={styles.contactDetail}>
            <FaPhone className={styles.iconDetail} /> +91 8879211747
          </p>
          <p className={styles.contactDetail}>
            <FaMapMarkerAlt className={styles.iconDetail} /> Mumbai, India
          </p>
          <p className={styles.contactDetail}>
            <FaGlobe className={styles.iconDetail} /> hiteshjangid.vercel.app
          </p>
          <h3 className={styles.subHeading2}>Social</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
