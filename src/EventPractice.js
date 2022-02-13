import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="message"
          placeholder="type anything"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}> 확인 </button>
      </div>
    );
  }
}

export default EventPractice;
