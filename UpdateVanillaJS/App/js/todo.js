const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;
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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);