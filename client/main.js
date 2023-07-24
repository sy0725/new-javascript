

import { diceAnimation, getNode, getNodes } from "./lib/index.js";


// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어 
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
// 3. 기록 버튼을 클릭했을때 hidden 제거하기
// 4. 주사위 값을 가져와서 랜더링

// 배열 구조 분해 할당


const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper')


// 진짜 진짜 쉬운 과제 (만들어보고 적용도 한번 시켜보자)

// disableElement(node)
// enableElement(node)
// isDisableState(note) => true / false

// visibleElement(node)  hidden
// invisibleElement(node)
// isVisibleState(node) => true / false

// // function disableElement(node){
//   recordButton.disabled = false;
//   resetButton.disabled =false;

//   node.disabled = false;

// // }

// // function enableElement(node){
//   recordButton.disabled = true;
//   resetButton.disabled =true;
// // }




const handleRollingDice = ((e) =>{
  
  let isClicked = false;
  let stopAnimation;
  

  return () => {  // 주사위 play
    if(!isClicked){
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled =true;


  
    }else{ //주사위 stop
      clearInterval(stopAnimation)
      recordButton.disabled = false;
      resetButton.disabled =false;

    }
  
    isClicked = !isClicked;
  }

  
})()

function handleRecord(){
  recordListWrapper.hidden = false;

  // 큐브의 data-dice 값만 가져오면 

}


function handleReset(){
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

}

startButton.addEventListener('click',handleRollingDice);
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)













