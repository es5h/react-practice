import { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>event practice</h1>
      <input
        type="text"
        name="username"
        placeholder="type anything"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="type anything"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeypress}
      />
      <button onClick={onClick}> 확인</button>
    </div>
  );
};

export default EventPractice;
