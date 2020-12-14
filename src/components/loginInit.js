import React, { Component } from "react";
import "./loginInit.css";
import firebase from "../firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
class LoginInit extends Component {
  login() {
    // const provider = new firebase.auth.GoogleAuthProvider();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-login">
          <h1>¡Gracias por sumarte a OneLink!</h1>
          <div className="login-explicacion">
            <div className="redes-eleccion">
              <h2>Selecciona una red social</h2>
              <a onClick={this.login}>
                <FontAwesomeIcon icon={faGoogle} className="icon" />
                Google
              </a>
              <a onClick={this.login}>
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                Facebook
              </a>
              <a onClick={this.login}>
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
