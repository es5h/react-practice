import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="message"
          placeholder="type anything"
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
