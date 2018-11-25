import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <section className="login">
        <div className="vs-logo" />
        <div className="login__form">
          <h1 className="form__title">Welcome to Voipscan</h1>
          <span className="form__text">Enter your phone number</span>
          <input className="form__input" type="text" />
          <input className="form__button" type="button" value="Send code" />
        </div>
        <div className="login__social-links">
          <ul className="social-links__list">
            <li className="social-links__item"><a className='social-links__link social-links__link_fb' href='#'></a></li>
            <li className="social-links__item"><a className='social-links__link social-links__link_tw' href='#'></a></li>
            <li className="social-links__item"><a className='social-links__link social-links__link_vk' href='#'></a></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
