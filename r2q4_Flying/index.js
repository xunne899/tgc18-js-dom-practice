
let button = document.querySelector('#placebtn')
button.addEventListener('click',function extractFormInfo(){
  let finput = document.querySelector('#first')
  let firstName = finput.value
  
  let lname = document.querySelector('#last')
  let lastName = lname.value
  
  let ticketClass = null
  let radioButtons = document.querySelectorAll('.ct')

 //price
let ticketPrice = 0

  for (r of radioButtons){

    if (r.checked){
      ticketClass = r.value;
      if(ticketClass == 'fclass'){
        ticketPrice = 1200
      }
      if(ticketClass == 'bclass'){
        ticketPrice = 750
     }
    if(ticketClass == 'eclass'){
      ticketPrice = 250
     }
    break;
  }

  }

  let options =[]
  // let optionvalue = 0

  let checkboxes = document.querySelectorAll('.formcheck');
  
  // for (let c of checkboxes) {
  //     if (c.checked) {
  //         options.push(c.value);
  //         optionvalue +=10
  //     }
  // }

    
  for (let c of checkboxes) {
    if (c.checked) {
        options.push(c.value);
    }
}
let optionlength = options.length
      optionlength = optionlength *10

      
let total = ticketPrice + optionlength

  let resultDiv = document.querySelector('div#summary');
  resultDiv.innerHTML = "<h2>total: "+ total  +"</h2>";

})
