import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <section className="chat">
        <div className="chat__contacts">
          <div className="chat-head">
            <span className="user-icon">
              <img src="./images/user.jpg" alt="pic" />
            </span>
            <div className="chat-head__controls">
              <span className="search" />
              <span className="write" />
            </div>
          </div>
          <div className="chat-body">
            <div className="chat-item">
              <span className="user-icon">
                <img src="./images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <span className="username username_gray">Сергей</span>
                <p className="message message_last">
                  Да, я понял. Я забыл вчера ключиот гаража – так что уже
                  вернусь домой за ключами, заберу велик и прикачу сразу
                </p>
              </div>
              <div className="chat-info">
                <span className="delivery-status" />
                <time className="send-time">16:56</time>
                <span className="unread-msg-counter">888</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat__messages">
          <div className="chat-head chat-head_light-color">
            <span className="user-icon">
              <img src="./images/user.jpg" alt="pic" />
            </span>
            <div className="chat-head__controls">
              <span className="search" />
              <span className="more" />
            </div>
          </div>
          <div className="chat-body">
            <div className="chat-item">
              <span className="user-icon">
                <img src="./images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <span className="username">Сергей</span>
                <p className="message">
                  Да, я понял. Я забыл вчера ключиот гаража – так что уже
                  вернусь домой за ключами, заберу велик и прикачу сразу
                </p>
              </div>
              <div className="chat-info">
                <span className="delivery-status" />
                <time className="send-time">16:56</time>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chat;
