import React, {Component} from 'react';
import PropTypes from 'prop-types'; //确保传递进来的类型

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { //只有改变是state的值才组建才重新技计算值
            num: props.num,
            homeDate: 'header',
        };
    };

    //  setState({},callback) 函数它在React中的执行行为可以认为是"异步的"回调函数里面可以拿到函数执行后的值
    btnClick() {
        let t = this.state.num;
        t = t * 2;
        this.setState({
            num: t,
            // homeDate:'header'
        }, ()=>{ console.log(this.state.num,'a121a') });
        console.log(this.state.num,'//')
    }
    handelFn(){
        this.btnClick()
        console.log(this.state.num,'aa')
        this.props.testFn(this.state.num,this.state.homeDate)
    }

    render() {
        return (
            <div className="header">
                <h1> hello world</h1>
                <p>{this.props.name}</p>
                {this.props.num + 1}
                {this.state.num}
                <button onClick={() => {this.btnClick()}}>点击</button>
                <button onClick={this.handelFn.bind(this)}>点击传递</button>
                {this.props.list.map((item, i) => {
                    return <span key={i}>{item}</span>
                })}
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    name: PropTypes.string,
    list: PropTypes.array,
    num: PropTypes.number,
};