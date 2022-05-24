// PLACE YOUR CODE HERE


let wantedList = document.querySelectorAll('div.a');

for (let wanted of wantedList){

    let newelement = document.createElement('span')
    newelement.innerHTML = "jailed"
    console.log(newelement)
    wanted.appendChild(newelement)
    wanted.style.backgroundColor = "red"
    
}


// let wantedList = document.querySelectorAll('div.a');

// for (let wanted of wantedList) {
//     let taskElement = document.createElement('span');
//     console.log(taskElement)
//     taskElement.innerHTML = "jailed"
//     console.log(taskElement.innerHTML)
//     wanted.appendChild(taskElement)
//     wanted.style.backgroundColor = "red"
// //    let list = document.querySelectorAll('div')

//     // get the current name 
//     // let currentName = wanted.innerHTML
//     // console.log(currentName)
//     // let currentName = wanted.appendChild("span")
    
//     // modify with jail
//     // (currentName + " jailed").innerHTML
//     // replace the current with the modify
//     // wanted.innerHTML = currentName
//     // console.log(newText)
// }


let coverList = document.querySelectorAll('div.box.a.undercover');

for (let cover of coverList) {
    cover.style.backgroundColor = "yellow"
}
