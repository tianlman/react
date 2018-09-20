/**
 * Created by XTJ on 2018/8/16.
 */

// 创建reducer.js（具体怎么操作）
import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET} from './action-types';
// 原始默认state,数据
const defaultState = {
    count: 0,
    factor: 1
}
//这里数据是从defaultState或者从组件那边过来，也就实现了数据的传递
function counter(state = defaultState, action) {
    //展开运算符如下例子
    const b = {a: 1, b: 2};
    console.log({c: 3, ...b},'..///????');//{c: 3, a: 1, b: 2}
    const object1 = {
        a: 1,
        b: 2,
        c: 3
    };
    const object2 = Object.assign({c: 4, d: 5}, object1)
    console.log(object2); //{ c: 3, d: 5, a: 1, b: 2 }

    console.log("action");
    console.log(action);
    console.log("state");
    console.log(state);
    console.log(state,'*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
    switch (action.type) {
        case INCREASE:
            // return { ...state, count: state.count + state.factor }; //展开运算符  和下面的写法是一样的
            return Object.assign({}, state, {
                count: state.count + state.factor
            });
        case DECREASE:
            return { ...state, count: state.count - state.factor };
        case RESET:
            return { ...state, count: action.parms };
        default:
            return state;
    }
}


export default combineReducers({
    counter
});