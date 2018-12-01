import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <section className="chat">
        <div className="chat__contacts"></div>
        <div className="chat__messages"></div>
      </section>
    );
  }
}

export default Chat;
