import React, { Component } from "react"
import ReactDOM from "react-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ""
    }
  }

  componentDidMount() {
    this.getTimeInterval()
  }

  getTimeInterval(){
    this.setState({
      time: Date.now()
    })
    setTimeout(() => {
      this.getTimeInterval()
    }, 1000)
  }

  render() {
    return (
      <div>Electron Study at {this.state.time}</div>
    )
  }
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById("container"))
}
