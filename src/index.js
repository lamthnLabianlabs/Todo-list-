
var inputAddTodo;
var buttonAddTodo;
var domListTodo;
var btnDelete;
var btnEdit;
var listTodo = getListTodo();
initView();

function getListTodo(){
    if(localStorage.getItem("list-todo"))
        return JSON.parse(localStorage.getItem("list-todo"));
    else
        return [];
}

function saveListTodo(listTodo){
    localStorage.setItem("list-todo",JSON.stringify(listTodo));
}

function getTodoHtml(id,content){
    let stringTodoHtml = `
    <div class="todo-item" >
        <span>${content}</span>
        <div class="item-option">
            <i class="fas fa-edit edit" onclick="optionTodoClick('edit',${id})" data-id=${id} data-type="edit"></i>
            <i class="fas fa-times delete" onclick="optionTodoClick('delete',${id})" data-id=${id} data-type="delete"></i>
        </div>
    </div>`;
    return stringTodoHtml;
}

function initView(){
    domListTodo = document.getElementById("list-todo");
    inputAddTodo = document.getElementById("in-add-todo");
    buttonAddTodo = document.getElementById("btn-add-todo");
    btnEdit = document.getElementsByClassName("edit");
    btnDelete = document.getElementsByClassName("delete");
}

function displayTodo(listTodo){
    var arrStringHtmlTodo = "";
    for(var i = 0 ; i < listTodo.length ; i++){
        arrStringHtmlTodo += getTodoHtml(i,listTodo[i]);
    }
    domListTodo.innerHTML = arrStringHtmlTodo;
}

function optionTodoClick(type,id){
    switch(type){
        case "delete":
            var confirm = window.confirm("do you want to delete ?");
            if(confirm){
                listTodo.splice(id,1);
            }
            displayTodo(listTodo);
            saveListTodo(listTodo);
            break;
        case "edit":
            var newUpdate = window.prompt("new todo update: ");
            listTodo[id] = newUpdate;
            displayTodo(listTodo);
            saveListTodo(listTodo);
            break;
    }
}
buttonAddTodo.addEventListener("click",function(){
    var contentAdd = inputAddTodo.value;
    listTodo.push(contentAdd);
    saveListTodo(listTodo);
    displayTodo(listTodo);
})

displayTodo(listTodo);