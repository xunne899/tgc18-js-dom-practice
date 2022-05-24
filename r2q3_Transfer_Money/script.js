// PLACE YOUR CODE HERE


let account = 0
let wallet = 0


document.querySelector('#top').addEventListener('click',function(){
    account+=10;
    document.querySelector('#account').innerHTML = account;
    
}) 

 document.querySelector('#t-wall').addEventListener('click',function(){
    wallet+=10
  let o = document.querySelector('#other-wallet')
  o.innerHTML = wallet;
  account-=10
  let a = document.querySelector('#account')
  a.innerHTML = account;
}) 

 

document.querySelector('#t-acc').addEventListener('click',function(){
    account+=10;
    document.querySelector('#account').innerHTML = account;
    wallet-=10
    document.querySelector('#other-wallet').innerHTML = wallet;
}) 




 