import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <p>Copyright 2020 © OneLink</p>
        <div className="redes">
          <a href="https://github.com/pupiaguayo">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://instagram.com/pupiaguayo">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://twitter.com/pupiaguayo">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
