import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer.js";
import ContainerInit from "./components/contenido-principal.js";
import ComoFunciona from "./components/comoFunciona.js";
import LoginInit from "./components/loginInit";
class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <LoginInit />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Login;
