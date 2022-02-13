import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
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
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="type anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeypress}
      />
      <button onClick={onClick}> 확인</button>
    </div>
  );
};

export default EventPractice;
