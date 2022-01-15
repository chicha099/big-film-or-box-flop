import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/react-moviedb/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png"
            alt="Movie DB Logo"
            width="100px"
          />
        </Link>
      </div>
      <Search />
    </div>
  </header>
);

export default Header;
