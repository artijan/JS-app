// clockContainer 상수를 지정하고 해당 상수에 js-clock클래스가 지정된 모든 값을 넣어줌
// clockTitle 상수를 지정하고 clockContainer에서 받아온 값 중 H1 태그로 지정된 값만 넣어줌
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

// getTime 함수를 지정하여 일/시/분/초 값을 각각 별도로 상수를 지정하고 넣어줌
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//getTime 함수를 호출하여 실시간으로 현재 시간을 받아오고 해당 값을 화면에 출력
//출력 주기는 setInterval 함수를 사용하여 '1초마다'로 지정, 매 초마다 시간이 갱신되도록 설정
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
