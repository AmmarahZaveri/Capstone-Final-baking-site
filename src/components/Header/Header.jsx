import React, { useState, useEffect } from 'react';
import styles from '../../styles/header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/henna1.png';

const nav_links = [
  {
    path: '#',
    display: 'Home'
  },
  {
    path: '#',
    display: 'Schedule'
  },
  {
    path: '#',
    display: 'Classes'
  },
  {
    path: '#',
    display: 'Pricing'
  }
];

const Header = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch('/classes');
      const data = await response.json();
      setClasses(data);
    };

    fetchClasses();
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>ZAVERI</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item) => (
                <li className="nav_item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav_right">
            <button className="register_btn">Register</button>
            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
