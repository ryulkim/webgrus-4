//JSON.stringify: 모든걸 string으로 바꿔줌
//JSON.parse: 살아있는 object를 만들 수 있음

const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li=event.target.parentElement;
    toDos=toDos.filter(item=>item.id!=li.id);//return true를 해야 object의 item이 유지된다.
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const btn=document.createElement("button");
    btn.innerText="🎈";//이모지: window key+.
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);//arrow function(화살표 함수)
}

function sexyFilter(item){
}