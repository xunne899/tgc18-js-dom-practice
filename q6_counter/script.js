let counter = 0;

function updateBoxColor(){
    // 0, null, undefined -> false
    if(counter%2){
        // odd number
        document.querySelector('#box').style.backgroundColor = "red";
    }
    else{
        // even number
        document.querySelector('#box').style.backgroundColor = "green";
    }
}

document.querySelector('#increment').addEventListener('click',function(){
        counter++;
        if(counter>10){
            counter = 10;
        }
        updateBoxColor();
        document.querySelector('#box').innerHTML = counter;
}) 


document.querySelector('#decrease').addEventListener('click',function(){
        counter--;
        if(counter<0){
            counter = 0;    
        }
        updateBoxColor();
        document.querySelector('#box').innerHTML = counter;
});

        
document.querySelector('#reset').addEventListener('click',function(){
    counter = 0;
    document.querySelector('#box').innerHTML = counter;
}) 