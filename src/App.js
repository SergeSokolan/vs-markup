import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section className="login">
        <div className="vs-logo" />
        <div className="login__form">
          <h1 className="form__title">Welcome to Voipscan</h1>
          <span className="form__text">Enter your phone number</span>
          <input className="form__input" type="text" />
          <Link to="/chat" className='form__link'>
            <input className="form__button" type="button" value="Send code" />
          </Link>
        </div>
        <div className="login__social-links">
          <ul className="social-links__list">
            <li className="social-links__item">
              <a
                className="social-links__link social-links__link_fb"
                href="#"
              />
            </li>
            <li className="social-links__item">
              <a
                className="social-links__link social-links__link_tw"
                href="#"
              />
            </li>
            <li className="social-links__item">
              <a
                className="social-links__link social-links__link_vk"
                href="#"
              />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
