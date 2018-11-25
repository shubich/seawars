import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './simple.css';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name='Andrey' />,
  document.getElementById('root')
);
