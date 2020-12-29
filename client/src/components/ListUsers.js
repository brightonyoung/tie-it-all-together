import React from 'react'
import axios from 'axios'

class ListUsers extends React.Component {
  constructor() {
    super()
    
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5500/users')
      .then(res => res.json)
      .then(users => this.setState({users: users}, console.log('fetching users...', users)))
    
  //   axios.get('http://localhost:5500/users')
  //     .then(function (response) {
  //       this.setState({users: response}, console.log("Users fetched...", {response}))
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
 }


  render() {
    return (
      <h1>List Users Component!</h1>
    )
  }
}

export default ListUsers