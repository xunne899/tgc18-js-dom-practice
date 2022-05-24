// PLACE YOUR CODE HERE


let empList = document.querySelectorAll('.emphasis');
for (let emp of empList) {
    emp.style.fontFamily = 'Verdana';
}

let List = document.querySelectorAll('li.finished');
for (let f of List) {
    f.style.textDecoration = "line-through";
}

let todoList = document.querySelectorAll('ul#low-priority li.todo');
for (let todo of todoList) {
    todo.style.backgroundColor = "blue";
}


let font = document.querySelectorAll('.alert');
for (let e of font) {
    e.style.color = 'red';
}