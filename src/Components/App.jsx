import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }

  counter = (event) => {
    console.log('here');
    this.setState((previousState) => {
      return {count: previousState.count + 1}
    });

  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState( {
      name: event.target.value,

    });
  };

  render() {
    return (
        <React.Fragment>
          <div>
            <Form
                counter={this.counter}
                handleChange={this.handleChange}
                count={this.state.count}
                name={this.state.name}
            />
            <div>Name:  {this.state.name} </div>
            <div className='name'># of Updates:  {this.state.count} </div>
          </div>
        </React.Fragment>
    );
  }
}


export default App;
