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
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({users: users}, console.log('fetching users...', users)))
    
    axios.get('/api/users')
      .then((response) => {
        this.setState({users: response.data}, console.log("Users fetched...", {response}))
      })
      .catch(function (error) {
        console.log(error);
      })
 }

  render() {
    return (
      <div>
        <h1>List Users Component!</h1>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id}>{user.firstName}</li>
            )
          } )}
        </ul>
      </div>
    )
  }
}

export default ListUsers