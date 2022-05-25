
let button = document.querySelector('#placebtn')
button.addEventListener('click',function extractFormInfo(){
  let finput = document.querySelector('#first')
  let firstName = finput.value
  
  let lname = document.querySelector('#last')
  let lastName = lname.value
  
  let ticketClass = null
  let radioButtons = document.querySelectorAll('.ct')


  for (r of radioButtons){


    let firstclassprice = ticketClass.document.querySelector('#fc')
    firstclassprice.innerHTML = 1200
    
  
    let bizclassprice = ticketClass.document.querySelector('#bc')
    bizclassprice.innerHTML = 750
  
    
    let eclassprice = ticketClass.document.querySelector('#ec')
    eclassprice.innerHTML = 250

    if (r.checked){
      ticketClass = r.value;
      break;
    }

    // else if (r.checked= r[1].value){
    //   ticketClass = 750;
    //   break;

    // }
    // else if (r[2].checked= r[2].value){
    //   ticketClass = 250;
    //   break;

    // }

  }

  let options =[]
  let checkboxes = document.querySelectorAll('.formcheck');
  for (let c of checkboxes) {
      if (c.checked) {
          options.push(c.value);
      }
  }

let total = ticketClass + options

  let resultDiv = document.querySelector('div#summary');
  resultDiv.innerHTML = "<h2>total: "+  total + firstName + lastName +"</h2>";

})

