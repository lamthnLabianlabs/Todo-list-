var Todo = function(stt,content){
    this.stt = stt;
    this.content = content;
}
var todo1 = new Todo(1,"hello")
console.log(todo1);

var listTodo = document.getElementById("list-todo");
listTodo.innerHTML = getTodoHtml("hello hahaha");

function getTodoHtml(content){
    let stringTodoHtml = `
    <div class="todo-item">
        <span>${content}</span>
        <div class="item-option">
            <i class="fas fa-edit"></i>
            <i class="fas fa-times"></i>
        </div>
    </div>`;
    return stringTodoHtml;
}