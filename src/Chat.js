import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <section className="chat">
        <div className="chat__contacts">
          <div className="chat-head">
            <span className="user-icon">
              <img src="/vs-markup/images/user.jpg" alt="pic" />
            </span>
            <div className="chat-head__controls">
              <span className="search" />
              <span className="write" />
            </div>
          </div>
          <div className="chat-body">
            <div className="chat-item">
              <span className="user-icon">
                <img src="/vs-markup/images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <div className="chat-message__status">
                  <span className="username username_gray">Сергей</span>
                  <span className="delivery-status delivery-status_read" />
                  <time className="send-time">16:56</time>
                </div>

                <div className="chat-message__body">
                  <div>
                    <span className="you">Вы</span>
                    <p className="message message_last">
                      Да, я понял. Я забыл вчера ключиот гаража – так что уже
                      вернусь домой за ключами, заберу велик и прикачу сразу
                    </p>
                  </div>
                  <span className="unread-msg-counter">888</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat__messages">
          <div className="chat-head chat-head_light-color">
            <span className="user-icon">
              <img src="/vs-markup/images/user.jpg" alt="pic" />
            </span>
            <div className="user-info">
              <span className="username username_head">Павел</span>
              <span className="user-info__recent">был(а) 7 минут назад</span>
            </div>
            <div className="chat-head__controls">
              <span className="search" />
              <span className="more" />
            </div>
          </div>
          <div className="chat-body">
            <div className="chat-item">
              <span className="user-icon">
                <img src="/vs-markup/images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <span className="username username_chat">Сергей</span>
                <div className="chat-message__item">
                  <p className="message message_main">
                    Да, я понял. Я забыл вчера ключи от гаража – так что уже
                    вернусь домой за ключами, заберу велик и прикачу сразу
                  </p>
                  <div className="chat-info">
                    <span className="delivery-status delivery-status_unread" />
                    <time className="send-time">16:56</time>
                  </div>
                </div>
                <div className="chat-message__item">
                  <p className="message message_main">
                    <img
                      className="chat-message-img"
                      src="/vs-markup/images/temp-msg.png"
                      alt="pic"
                    />
                  </p>
                  <div className="chat-info">
                    <span className="delivery-status delivery-status_waiting" />
                    <time className="send-time">16:56</time>
                  </div>
                </div>
                <div className="chat-message__item">
                  <p className="message message_main">
                    Да, я понял. Я забыл вчера ключи от гаража – так что уже
                    вернусь домой за ключами, заберу велик и прикачу сразу
                  </p>
                  <div className="chat-info">
                    <span className="delivery-status delivery-status_error" />
                    <time className="send-time">16:56</time>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="chat-textarea">
            <span className="attaches" />
            <span className="emotion" />
            <textarea className="textarea" placeholder="Напишите текст" />
            <span className="send" />
          </div>
        </div>
      </section>
    );
  }
}

export default Chat;
