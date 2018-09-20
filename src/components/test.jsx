import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease, reset } from '../store/test/actions';

class Home extends Component {
    _onPressReset() {
        this.props.dispatch(reset(10));
    }

    _onPressInc() {
        this.props.dispatch(increase());
    }

    _onPressDec() {
        this.props.dispatch(decrease());
    }

    render() {
        return (
            <div >
                <h1 >{this.props.counter.count}</h1>
                <button  onClick={()=>this._onPressReset()}>
                    <span>归零</span>
                </button>
                <button onClick={()=>this._onPressInc()}>
                    <span>加1</span>
                </button>
                <button onClick={()=>this._onPressDec()}>
                    <span>减1</span>
                </button>
            </div>
        );
    }
}

const abc = state => ({
    counter: state.counter
})

export default connect(abc)(Home);