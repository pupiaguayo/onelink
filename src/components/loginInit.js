import React, { Component } from "react";
import "./loginInit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
class LoginInit extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-login">
          <h1>¡Gracias por sumarte a OneLink!</h1>
          <div className="login-explicacion">
            <div className="redes-eleccion">
              <h2>Selecciona una red social</h2>
              <a href="https://github.com/pupiaguayo">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
                Google
              </a>
              <a href="https://instagram.com/pupiaguayo">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                Facebook
              </a>
              <a href="https://twitter.com/pupiaguayo">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                Twitter
              </a>
            </div>
            <ul>
              <li>Logueate con una red social</li>
              <li>Inicia sesion siempre utilizando la misma</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginInit;
