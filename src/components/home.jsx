import React, {Component} from 'react';
import PropTypes from 'prop-types'; //确保传递进来的

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeMounted: true,
            opacity:1,
            background:'red',
            dx:12
        }
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000)
        console.log('Constructor');
    };
// componentWillMount   在渲染前调用,在客户端也在服务端。
//
// componentDidMount   在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
// 如果你想和其他JavaScript    框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
//
// componentWillReceiveProps     在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
//
// shouldComponentUpdate     返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
// 可以在你确认不需要更新组件时使用。
//
// componentWillUpdate  在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
//
// componentDidUpdate   在组件完成更新后立即调用。在初始化时不会被调用。
//
// componentWillUnmount 在组件从 DOM 中移除的时候立刻被调用。

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount-------------------------");
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            var background = this.state.background;
            var dx = this.state.dx;
            // opacity -= .01;
            // dx +=1;
            if (opacity < 0.1) {
                opacity = 1.0;
                background = 'blue';
                dx = 12
            }
            this.setState({
                opacity: opacity,
                background:background,
                dx:dx
            });
        }.bind(this), 10000);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Component should update', nextProps, nextState);
        // if (nextState.status === 1) { //返回false的时候 组建不会被更行
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }


    render() {
        return (
            <div className="home-container" style={{opacity: this.state.opacity,color:this.state.background,fontSize:this.state.dx+'px'}}>
                {this.props.headerList}
                <span>home</span>
            </div>
        );

    }
}