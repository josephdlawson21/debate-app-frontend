import React, { Component } from 'react';
import axios from '../utils/axiosconfig.js';

class Home extends Component {
  state = {
    schools: [],
    users: [],
    tournaments: []
  }

  componentDidMount() {
    axios.get('/schools')
    .then((res) => {
      console.log("lol", res);
      this.setState({
        schools: res.data
      });
    })

    axios.get('/users')
    .then((res) => {
      console.log("lol", res);
      this.setState({
        users: res.data
      });
    })

    axios.get('/tournaments')
    .then((res) => {
      console.log("lol", res);
      this.setState({
        tournaments: res.data
      });
    })
  }

  render() {
    return (
      <div className="Home">
        <div>
          <h1>users</h1>
          <ol>
            {this.state.users.map(userObj => <li>{userObj.name}</li>)}
          </ol>
        </div>
        <div>
          <h1>schools</h1>
          <ol>
            {this.state.schools.map(schoolObj => <li>{schoolObj.name}</li>)}
          </ol>
        </div>
        <div>
          rounds
        </div>
        <div>
          <h1>tournaments</h1>
          <ol>
            {this.state.tournaments.map(tournamentObj => <li>{tournamentObj.name}</li>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
