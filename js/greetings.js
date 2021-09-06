const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
//string이 반복해서 쓰일 땐 대문자변수로 저장해두기

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value; // input에서 받은 username
  localStorage.setItem(USERNAME_KEY,username); //localStorage에 저장
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;//== "Hello " + username
  //                       // string 안에 변수를 추가하고 싶다면 ${변수}로 추가
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  //show the greetings
  paintGreetings(saveUsername) //local storage에 있는 유저정보
}