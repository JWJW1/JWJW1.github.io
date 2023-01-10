const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}


//target은 클릭된 HTML element
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // 클릭한 li.id와 다른 toDo는 남김
    toDos = toDos.filter(toDo => toDo.id !==parseInt(li.id));
    saveToDos();
}
//object를 받음 
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span=document.createElement("span");
    span.innerText = newTodo.text;
    const button =document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // id를 부여해서 삭제가 용이하게 
    const newTodoObj={
        text: newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //array의 각 item에 대해 하나의 function을 실행가능
    parsedToDos.forEach(paintToDo);
}

