/**
 * Created by XTJ on 2018/8/16.
 */

// 创建actions.js,action的函数，给组件使用

import { INCREASE, DECREASE, RESET } from './action-types';
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
// const reset = () => ({ type: RESET });
var reset = function reset(JD) {
    console.log("case"+JD);
    return { type: RESET,
        parms:JD//从组件那边传递来的参数
    };
};
export {
    increase,
    decrease,
    reset
}