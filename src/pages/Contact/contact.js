import React, { useState } from 'react';
import styles from './contact.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaGlobe, FaDev } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>
        <span className={styles.letterL}>L</span>et's Connect
      </h2>
      <div className={styles.contactContent}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" id="name" name="name" className={styles.input} placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" id="email" name="email" className={styles.input} placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea id="message" name="message" className={styles.textarea} placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <button type="submit" className={styles.submitButton}>Send Message</button>
            {status && <p className={styles.status}>{status}</p>}
          </div>
        </form>
        <div className={styles.contactDetails}>
          <h3 className={styles.subHeading}>Contact Info</h3>
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
          <br />
          <h3 className={styles.subHeading2}>Connect With Me</h3>
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
