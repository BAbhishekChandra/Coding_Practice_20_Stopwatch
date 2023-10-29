// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerValueInSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerValueInSeconds: 0})
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerValueInSeconds: prevState.timerValueInSeconds + 1,
    }))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timerValueInSeconds} = this.state
    const seconds = Math.floor(timerValueInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerValueInSeconds} = this.state
    const minutes = Math.floor(timerValueInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="image-title-container">
              <img
                className="stopwatch-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="stopwatch-container-title">Timer</p>
            </div>

            <h1 className="stopwatch-timer">{time}</h1>
            <div className="buttons-container">
              <button
                className="start-button"
                type="button"
                onClick={this.startTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
