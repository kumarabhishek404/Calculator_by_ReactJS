import React, { Component } from 'react';

class ResultComponent extends Component {

    render() {
        // console.log(this.props.result);
        let { result } = this.props;
        return (
            <div className='result'>
                <p>{result}</p>
            </div>
        )
    }
}

export default ResultComponent;