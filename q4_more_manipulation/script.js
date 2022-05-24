let header = document.querySelector('h1')
header.style.color = "green";

let todo = document.querySelector('li.finished')
todo.innerText = "Repay credit card debt";

let important = document.querySelector('li#urgent')
important.style.border= "2px solid black";

let emp = document.querySelector('span.emphasis')
emp.style.textDecoration = "underline";

let p_emp = document.querySelector('p.emphasis')
p_emp.style.backgroundColor = "orange";
p_emp.style.fontSize = "32px";
p_emp.style.lineHeight = "24px";

let span_class = document.querySelector('li#urgent span.todo')
span_class.style.backgroundColor = "yellow";


let header2 = document.querySelector('h2').innerHTML = '<span class="greetings">About Us</span>';
header2.innerHTML = '<span class="greetings">About Us</span>';