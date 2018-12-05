import React, { Component } from "react";
import Textarea from "react-textarea-autosize";

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
                    <span className="last-user">Вы</span>
                    <p className="message message_last">
                      Да, я понял. Я забыл вчера ключиот гаража – так что уже
                      вернусь домой за ключами, заберу велик и прикачу сразу
                    </p>
                  </div>
                  <span className="unread-msg-counter">888</span>
                </div>
              </div>
            </div>

            <div className="chat-item">
              <span className="user-icon">
                <img src="/vs-markup/images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <div className="chat-message__status">
                  <span className="username username_gray">Чат дома №66</span>
                  {/* <span className="delivery-status delivery-status_read" /> */}
                  <time className="send-time">16:56</time>
                </div>
                <div className="chat-message__body">
                  <div>
                    <span className="last-user last-user_another">
                      Консьерж Людвиг Аристархович
                    </span>
                    <p className="message message_last">Кто это сделал?</p>
                  </div>
                  <span className="unread-msg-counter">3</span>
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
            <div className="history-text">Вчера</div>

            {/* сообщения пользователя */}
            <div className="chat-item">
              <span className="user-icon">
                <img src="/vs-markup/images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <span className="username username_chat">Сергей</span>
                {/* список его сообщений */}
                <div className="chat-message__item">
                  <p className="message message_main">Привет, как дела?</p>
                  <div className="chat-info">
                    <span className="delivery-status delivery-status_unread" />
                    <time className="send-time">16:56</time>
                  </div>
                </div>
              </div>
            </div>

            {/* сообщения пользователя */}
            <div className="chat-item">
              <span className="user-icon">
                <img src="/vs-markup/images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <span className="username username_chat">Сергей</span>
                {/* список его сообщений */}
                <div className="chat-message__item">
                  <p className="message message_main">Все ок, спс!</p>
                  <div className="chat-info">
                    <span className="delivery-status" />
                    <time className="send-time">16:56</time>
                  </div>
                </div>

                <div className="chat-message__item">
                  <p className="message message_main">
                    Равным образом укрепление и развитие структуры играет важную
                    роль в формировании модели развития. Значимость этих проблем
                    настолько очевидна, что рамки и место обучения кадров в
                    значительной степени обуславливает создание направлений
                    прогрессивного развития.
                  </p>
                  <div className="chat-info">
                    <span className="delivery-status" />
                    <time className="send-time">16:56</time>
                  </div>
                </div>
              </div>
            </div>

            <div className="history-text">Сегодня</div>

            {/* сообщения пользователя */}
            <div className="chat-item">
              <span className="user-icon">
                <img src="/vs-markup/images/user.jpg" alt="pic" />
              </span>
              <div className="chat-message">
                <span className="username username_chat">Сергей</span>
                {/* список его сообщений */}
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
          <div className='chat-textarea-container'>
            <div className="chat-textarea">
              <span className="attaches" />
              <span className="emotion" />
              <div className="textarea-container">
                <Textarea
                  className="textarea"
                  placeholder="Напишите текст"
                  maxRows="5"
                />
              </div>
              <span className="send" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chat;
