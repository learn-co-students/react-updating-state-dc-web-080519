// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state ={
      beenClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      beenClicked: true
    })
  }

  render() {
    return(
      <div>
        <p>I have {this.state.beenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>CLICK ME!</button>
      </div>
    )
  }
}

export default ClickityClick