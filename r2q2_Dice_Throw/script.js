// PLACE YOUR CODE HERE

let button = document.querySelector('#btn');
button.addEventListener('click', function(){
    
   let randomNumber1 = Math.ceil(Math.random() * 6  );
   // console.log(randomNumber)
   let randomNumber2 = Math.ceil(Math.random() * 6  );
   // 1. select the container that we want add into
   let p = document.querySelectorAll('.box');

   // 2. Append in the new random number
   p[0].innerText =  randomNumber1;
   p[1].innerText =  randomNumber2;

//    let res = document.querySelectorAll('.results')

   let res = document.querySelector('#results');
//    console.log(taskElement)
   res.innerText= parseInt(p[0].innerText) + parseInt(p[1].innerText)
//    console.log(taskElement.innerHTML)
   

//    results = p[0].innerHTML + p[1].innerHTML
})
