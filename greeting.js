//js-form 클래스에 있는 모든 태그 및 데이터 값을 form 상수로 넣어줌
//input 상수에는 form값 중 input으로 입력받은 텍스트 값만 넣어줌
//greeting에는 js-greetings 클래스에 있는 모든 태그 및 데이터 값을 넣어줌
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//USER_LS에는 currentUser 상수 값을 넣어줌
//SHOWING_CN에는 showing 상수 값을 넣어줌
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// 로컬 스토리지에 사용자 이름을 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//페이지가 리프레쉬 되는 이벤트를 막고 텍스트 출력과 사용자 이름 저장 기능을 호출
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

//사용자 이름을 묻는 입력창을 호출하고 handlesubmit을 호출
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

//사용자 이름을 묻는 입력창을 숨기고 greeting에 사용자 이름을 추가 및 출력
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `안녕! ${text}`;
}

//로컬 스토리지에 저장되어 있는 사용자 이름을 currentuser 변수에 저장하고
//사용자 이름이 존재하면 이름을 출력하는 기능으로 넘기고, 없으면 사용자 이름을 묻는 기능으로 넘김

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

//init함수 기능을 정의
function init() {
  loadName();
}

//init 함수를 호출
init();
