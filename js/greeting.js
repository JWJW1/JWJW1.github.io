const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY="username";
function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const saveUsername= localStorage.getItem(USERNAME_KEY);
// 저장소에 없으면 form 표시, but 저장소에 존재하면 greeting 표시 
if(saveUsername===null){
    // form의 hidden 클래스를 삭제하여 보여지게 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(saveUsername);
}
