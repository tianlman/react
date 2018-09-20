import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import { Provider } from 'react-redux';
import Test from './components/test';
import store from './store/store';



let title = '11', list = ['我', '是', '谁'];

let data = 3;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: data,
            homeDate:'homeData'
        }
    }

    test(a,data) {
        console.log(a);
        let b = a
        this.setState({
            a: b,
            homeDate:data
        })
        console.log(this.state.a,';')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {this.state.a}
                <Header
                    name="title"
                    list={list}
                    num={3}
                    testFn={this.test.bind(this)}
                >
                    <p>my name is tl</p>
                </Header>
                <Home headerList={this.state.homeDate}></Home>
                <Provider store={store}>
                    <Test/>
                </Provider>
            </div>
        );
    }
}


