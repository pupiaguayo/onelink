import React, { Component } from "react";
import "./contenido-principal.css";
import SocialLife from "../SocialLife.svg";
import { Link } from "react-router-dom";
class ContainerInit extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-edit">
          <h1>¡Tus links en un solo lugar!</h1>
          <div className="descripcion">
            <img src={SocialLife} />
            <ul>
              <li>Comparti tus links registrados asdasd</li>
              <li>Ingresa los links que deseas</li>
              <li>Aca nose que agregar xdddd</li>
            </ul>
          </div>
          <Link to="/login">
            <button>¡EMPEZÁ AHORA!</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default ContainerInit;
