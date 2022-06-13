const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
// string 이 포함된 변수를 선언할땐 대문자로 선언하는 관습이 있다.

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username",username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);