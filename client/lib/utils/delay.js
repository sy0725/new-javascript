
import { getNode } from "../dom/getNode.js";




function delay(callback,timeout = 1000){
setTimeout(callback,timeout)
}


const first = getNode('.first')
const second = getNode('.second')


// delay(()=>{
//     first.style.top = '-100px'
//     delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//       delay(()=>{
//     first.style.top = '0'
//     second.style.top = '0'
//       })
//       second.style.top = '100px'
//     })
//   })

// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

// function delayP(){

//     return new Promise((resolve, reject) => {
//         resolve('성공입니다!!')
//     })

// }

// delayP()
// .then((result)=>{
//     console.log(result);
// })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ





// 생성자함수 new .... 으로 만드는건 전부 객체가 튀어나온다. JS 특징
// new promise 는 정확히는 promise 객체를 반환한다.
// 성공해도 실패해도 .then()은 똑같이 실행되고 (첫번째는 성공했을때 결과, 두번째는 실패했을때 실행되는 결과)

// 1. promise 는 promise 객체를 반환한다.



let state = false; // 통신 성공, 실패

function delayO(){

    //  성공이야 ? (약속해 알려주기로) 그리고 나서 (then) 이거해
    //  실패야 ? (약속해 알려주기로) 그리고 나서 (then) 이거해

    return new Promise((resolve,reject)=>{

        // resolve('통신 성공')

        reject('통신 실패')
    })
}



delayO()
.then((결과)=>{
    console.log(결과);
},(결과)=>{
    console.log(결과);
})















