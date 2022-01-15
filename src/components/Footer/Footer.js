import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Check my <a href="https://github.com/florengo">GitHub</a> or my <a href="https://www.linkedin.com/in/florencia-guadalupe-gonzalez/">
        <FontAwesome className={styles.icon} name="github" /> Linkedin
      </a>
    </p>
    <p>
      
    </p>
  </footer>
);

export default Footer;
