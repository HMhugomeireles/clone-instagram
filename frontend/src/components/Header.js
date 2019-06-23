import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="clone instagram"></img>
        </Link>
        <Link to="/new">
          <img src={camera} alt="Send post"></img>
        </Link>
      </div>
    </header>
  );
}