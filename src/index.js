import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';


class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
