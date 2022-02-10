import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    age: PropTypes.number.isRequired,
  };

  render() {
    const { name, age, children } = this.props;

    return (
      <div>
        my name is {name}. <br />
        my age is {age}. <br />
        children is {children}
      </div>
    );
  }
}

export default MyComponent;
