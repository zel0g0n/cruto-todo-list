import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.dec = this.dec.bind(this)
    this.res = this.res.bind(this)
  }

  inc = () => {
    this.setState(() => ({counter: this.state.counter+1}))
  }
  dec() {
    this.setState(() => ({counter: this.state.counter-1}))
  }
  res()  {
    this.setState(() => ({counter: 0}))
  }

  render() {


    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.res}>restart</button>
        <button onClick={this.dec}>dec</button>
      </div>
    )
  }
}

export default Counter