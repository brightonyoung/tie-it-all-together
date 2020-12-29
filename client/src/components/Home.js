import React from 'react'
import { Link } from 'react-router-dom'

import './componentStyles/Home.css';

import Button from '@material-ui/core/Button';


const Home = (props) => {
  return (
    <div className="Home">
      <header className="Home-header">
        Welcome Home!
        <Link style={{ textDecoration: "none" }} to="/login">
          <Button 
            variant="contained" 
            color="secondary" 
          >
            Login
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/mushrooms">
          <Button 
            variant="contained" 
            color="secondary" 
          >
            Meet the Mushrooms
          </Button>
        </Link>
      </header>
    </div>
  )
}

export default Home