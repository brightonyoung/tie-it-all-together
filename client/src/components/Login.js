import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
   
    // function to do something
   
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          Please Login
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type='email' name='email' placeholder='email' value={this.state.key} onChange={e => this.handleChange(e)} />
            <input type='password' name='password' placeholder='password' value={this.state.key} onChange={e => this.handleChange(e)} />
            <input type='submit' />
          </form>
          <Button 
            variant="contained" 
            color="secondary" 
            >
            Login
          </Button>
        </header>
      </div>
    )
  }
}

export default Login