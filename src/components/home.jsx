import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from '../utils/axiosconfig.js';

class Home extends Component {
  state = {
    schools: [],
    users: [],
    tournaments: []
  }

  componentDidMount() {
    console.log("hello");
    axios.get('/schools')
    .then((res) => {
      console.log("school res", res);
      this.setState({
        schools: res.data
      });
    })

    axios.get('/users')
    .then((res) => {
      console.log("users res", res);
      this.setState({
        users: res.data
      });
    })

    axios.get('/tournaments')
    .then((res) => {
      console.log("tournaments res", res);
      this.setState({
        tournaments: res.data
      });
    })
  }

  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
            <Col m='auto'>
              <h1>users</h1>
               {this.state.users.map(userObj => <li>{userObj.name}</li>)}
            </Col>
          </Row>
          <Row>
            <Col m='auto'>
              <h1>schools</h1>
              <ol>
                {this.state.schools.map(schoolObj => <li>{schoolObj.name}</li>)}
              </ol>
            </Col>
          </Row>
          <Row>
            <Col m='auto'>
              rounds
            </Col>
          </Row>
          <Row>
            <Col m='auto'>
              <h1>tournaments</h1>
              <ol>
                {this.state.tournaments.map(tournamentObj => <li>{tournamentObj.name}</li>)}
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
