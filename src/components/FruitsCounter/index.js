// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onEatMango = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">
          Bob ate <span className="count-value"> {key1} </span> mangoes{' '}
          <span className="count-value"> {key2} </span> bananas
        </h1>
        <div className="fruits">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-img"
            />
            <div className="btn-container">
              <button
                className="eat-button"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-img"
            />
            <div className="btn-container">
              <button
                className="eat-button"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
