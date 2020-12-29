import React from 'react'
import axios from 'axios'

class ListMushrooms extends React.Component {
  constructor() {
    super()
    
    this.state = {
      mushrooms: []
    }
  }

  componentDidMount() {    
    axios.get('/mushrooms')
      .then((response) => {
        this.setState({mushrooms: response.data}, console.log("mushrooms fetched...", {response}))
      })
      .catch(function (error) {
        console.log(error);
      })
 }

  render() {
    return (
      <div>
        <h1>List mushrooms Component!</h1>
        <ul>
          {this.state.mushrooms.map((mushroom) => {
            return (
              <li key={mushroom.id}>{mushroom.genus} {mushroom.species}</li>
            )
          } )}
        </ul>
      </div>
    )
  }
}

export default ListMushrooms