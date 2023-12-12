import { useState } from "react";

export const Chat = () => {
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  return (
    <>
      <div className="Chat">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const currentTime = new Date().toLocaleTimeString();
            const newMessage = {
              text: `${username}: ${message}`,
              time: currentTime,
            };
            setChatMessages([...chatMessages, newMessage]);
            setUserName("");
            setMessage("");
          }}
        >
          <div>
            {chatMessages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.time}</strong> - {msg.text}
              </div>
            ))}
          </div>
          <div className="inputs">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              placeholder="Введіть ваше ім'я"
            ></input>
            <input
              type="text"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Введіть ваше повідомлення"
            ></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
