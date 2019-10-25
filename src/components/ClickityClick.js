import React from 'react'
import LightSwitch from './LightSwitch'

<button asdkjf ></button>
class ClickityClick extends React.Component {
    constructor() {
        super() 
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue'
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }


    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
                <button onClick={this.handleClick} >Click Me!</button>
                <LightSwitch/>
            </div>
        )
    }
}

export default ClickityClick