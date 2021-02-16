import React from 'react';
import {connect} from 'react-redux'

class Counter extends React.Component{
    decrement = () =>{
        this.props.dispatch({
            type: "DECR"
        });
    }

    increment = () =>{
        this.props.dispatch({
            type: "INCR"
        });
    }
    
    render(){
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    console.log("Mapping state to props for a Counter: "+JSON.stringify(state));
    return {
        count: state.counter.count
    };
};

export default connect(mapStateToProps)(Counter);