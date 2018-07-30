import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import css from './footer.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="logo">
        <Link to="/"><ReactSVG className="star-icon" path="images/saleor-logo.svg" /></Link>
      </div>
      <div className="content">
        <div className="grid">
          <div className="column-9 menu">
            <div className="grid">
              <div className="column-2">
                <ul>
                  <li><h4>Company</h4></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Carieers</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
              <div className="column-2">
                <ul>
                  <li><h4>Solution</h4></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Roadmap</a></li>
                  <li><a href="">Docs</a></li>
                  <li><a href="">Demo</a></li>
                </ul>
              </div>
              <div className="column-2">
                <ul>
                  <li><h4>Community</h4></li>
                  <li><a href="">Contribute</a></li>
                  <li><a href="">Case studies</a></li>
                  <li><a href="">Become a partner</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column-3 icons">
            <div class="grid">
              <div class="columns-1">
                <a href=""><ReactSVG className="twitter-icon" path="images/twiiter-icon.svg" /></a>
              </div>
              <div class="columns-1">
                <a href=""><ReactSVG className="facebook-icon" path="images/fb-icon.svg" /></a>
              </div>
              <div class="columns-1">
                <a href=""><ReactSVG className="github-icon" path="images/github-icon.svg" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-links grid">
        <div class="column-2">
          <a href="">Terms of service</a>
        </div>
        <div class="column-2">
          <a href="">Privacy policy</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;