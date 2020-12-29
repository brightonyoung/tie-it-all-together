// Dependency import 
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

// Local imports
import Home from './components/Home'
import Login from './components/Login'
import ListMushrooms from './components/ListMushrooms'
import ListUsers from './components/ListUsers'

const checkAuth = () => {
  // dummy functionality
  if(1 === 1) {
    return true
   } else {
     return false
   }
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => checkAuth() 
        ? <Component {...props} /> 
        : <Redirect to="/login" />
      }
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/mushrooms" component={ListMushrooms}></Route>
      <ProtectedRoute path="/users" component={ListUsers}></ProtectedRoute>
    </Switch>
  )
}

export default Router
