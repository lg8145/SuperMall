import {request} from "./request";
import fetch from './fetch'
export function getHomeMultidata(){
    return request({
        url:'/title/'
    })
}
// export function login(){
//   return request({
//       url:'/login/'
//   })
// }
export const login = data => fetch('/login/', data, 'POST');
export function getHomeGoods(type, page){
    return request({
        url:'/home/data',
        params:{
            type,
            page,
        }
    })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()