import React, {component, Component} from 'react';

class KeyPadComponent extends Component{
    render(){
        return(
            <div className="button">
                <button name="SquareRoot" onClick={e => this.props.onClick(e.target.name)}>&#8730;</button>
                <button name="Square" onClick={e => this.props.onClick(e.target.name)}>X&sup2;</button>
                <button name="Qube" onClick={e => this.props.onClick(e.target.name)}>X&sup3;</button>
                <button name="Factorial" onClick={e => this.props.onClick(e.target.name)}>X!</button>
                <button name="2.718281828459045" onClick={e => this.props.onClick(e.target.name)}>e</button>

                <button name="Log10" onClick={e => this.props.onClick(e.target.name)}>log10()</button>
                <button name="Log" onClick={e => this.props.onClick(e.target.name)}>log()</button>
                <button name="Power" onClick={e => this.props.onClick(e.target.name)}>pow</button>
                <button name="Raciprocal" onClick={e => this.props.onClick(e.target.name)}>1/x</button>
                <button name="3.14159265" onClick={e => this.props.onClick(e.target.name)}>&#928;</button>

                <button name="Sin" onClick={e => this.props.onClick(e.target.name)}>sin</button>
                <button name="Cos" onClick={e => this.props.onClick(e.target.name)}>cos</button>
                <button name="Tan" onClick={e => this.props.onClick(e.target.name)}>tan</button>
                <button name="Persentage" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button name="Clear" onClick={e => this.props.onClick(e.target.name)}>Clear</button>

                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="Backspace" onClick={e => this.props.onClick(e.target.name)}>Backspace</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="," onClick={e => this.props.onClick(e.target.name)}>,</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>

                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </div>
        )
    }
}

export default KeyPadComponent;