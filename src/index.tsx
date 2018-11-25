import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './simple.css';
import './style.scss';

class HelloMessage extends React.Component<any, any> {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Andrey" />,
  document.getElementById('root'),
);
