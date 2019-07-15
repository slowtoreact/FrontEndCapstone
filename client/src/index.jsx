import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: []
    }
  }

  handleClick(e) {
    e.preventDefault();
    let decoded = (e.currentTarget.getElementsByTagName("b")[0].innerHTML).replace('amp;', '')
    console.log(decoded)
    axios.get(`/restaurant`, {
      params: {
        name: decoded
      }
    })
      .then(result => {
        this.setState({
          restaurants: result.data
        })
      })
  }

  componentDidMount() {
    axios.get('/api/cities')
      .then(result => this.setState({
        restaurants: result.data
      }))
      .catch(error => this.setState({
        error
      }));
  }

  render() {
    return (
      <div>
        <Card restaurants={this.state.restaurants} onClick={(e) => this.handleClick(e)} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
);