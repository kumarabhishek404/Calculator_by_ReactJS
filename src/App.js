import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import KeyPadComponent from './Components/KeyPadComponent'
import ResultComponent from './Components/ResultComponent'

class App extends Component {
  constructor() {
    super()

    this.state = {
      result: " "
    }
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "Clear") {
      this.reset()
    }
    else if (button === "Backspace") {
      this.backspace()
    }
    else if (button === "SquareRoot") {
      this.squareRoot()
    }
    else if (button === "Square") {
      this.square()
    }
    else if (button === "Qube") {
      this.qube()
    }
    else if (button === "Factorial") {
      this.factorial()
    }
    else if (button === "Persentage") {
      this.persentage()
    }
    else if (button === "Raciprocal") {
      this.raciprocal()
    }
    else if(button === "Log10"){
      this.log10()
    }
    else if(button === "Log"){
      this.log()
    }
    else if(button === "Power"){
      this.pow()
    }
    else if(button === "Sin"){
      this.sin()
    }
    else if(button === "Cos"){
      this.cos()
    }
    else if(button === "Tan"){
      this.tan()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    var checkResult = '';
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }
    else {
      checkResult = this.state.result
    }
    
    try {
      this.setState({
        result: eval((checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }
  
  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    if (this.state.result) {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    }
    else{
    this.reset()
    }
  }

  squareRoot = () => {
    this.setState({
      result: Math.sqrt(this.state.result)
    })
  }

  square = () => {
    this.setState({
      result: (this.state.result * this.state.result)
    })
  }
  factorial = () => {
    let n = this.state.result;
    let total = 1;
    for (var i = 1; i <= n; i++) {
      total = total * (n - (n - i))
    }
    this.setState({
      result: total
    })
  }

  qube = () => {
    this.setState({
      result: this.state.result * this.state.result * this.state.result
    })
  }

  persentage = () => {
    let persentageArray = this.state.result.split(',')
    this.setState({
      result: (parseInt(persentageArray[0]) / parseInt(persentageArray[1])) * 100
    })
  }

  raciprocal = () => {
    this.setState({
      result: 1 / this.state.result
    })
  }

  log10 = () => {
    this.setState({
      result: Math.log10(this.state.result)
    })
  }

  log = () => {
    this.setState({
      result: Math.log(this.state.result)
    })
  }

  pow = () => {
    let powerArray = this.state.result.split(',')
    this.setState({
      result: Math.pow(parseInt(powerArray[0]), parseInt(powerArray[1]))
    })
  }

  sin = () => {
    this.setState({
      result: Math.sin(this.state.result)
    })
  }

  cos = () => {
    this.setState({
      result: Math.cos(this.state.result)
    })
  }

  tan = () => {
    this.setState({
      result: Math.tan(this.state.result)
    })
  }

  render() {
    return (
      <div>
        <div className="calculator-body">
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  };
}

export default App;