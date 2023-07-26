


import { insertLast, xhrPromise } from "./lib/index.js";
import { tiger } from './lib/utils/tiger.js';


const URL = 'https://jsonplaceholder.typicode.com/users'

// const data = tiger.get('https://jsonplaceholder.typicode.com/users')

// console.log(data);

// fetch 는왜 쓰는건가요 ? 



 



// then , await 은 서버에서 떨어진 결과가 나올때까지 기다렸다가 데이터가 오면 resolve 나 reject 를 반환한다. 데이터가 오지도않았는데 실행이되지않는다 .그말으 즉 데이터가 잘 넘어왔다면 resolve 를 반환하고 데이터가 안왓다면 reject 를 반환한다. 그렇기에 '코드실행흐름제어' 라고하는거다.
// 그렇기에 error 이 발생하지안흔다.

// 여기서 .json을 하는 이유는 모든 데이터는 문자화가 되어서 넘어오는데 데이터화를 해주는것이 .json()이다 - 응답을 파싱해 JSON 객체로 변경함

//  한번 url 데이터를 불러와 응답에 넣고 그 받은 데이터를 await 을 이용해서 결과물을 데이터에 넣은 다음에 ,json을 이용해서 데이터를 받음과 동시에 await 을 써서 확실한 데이터를 받는다 . await 은 2번을 써야한다

// await 역할은
// 1) 코드실행흐름제어 - resolve, reject 반환할때까지
// 2) result 값 내뱉는 역할

const 응답 = (fetch(URL));

const 데이터 = await 응답

const 유저데이터 = await 데이터.json()


유저데이터.forEach((유저)=>{
    insertLast(document.body,`<div>${유저.name}</div>`)
})
console.log();




// await data

// console.log();