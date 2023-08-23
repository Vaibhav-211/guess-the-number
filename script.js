let btn = document.getElementById("btn");
let output = document.getElementById("output");

let number = Math.floor(Math.random()*100) + 1 ;
 btn.addEventListener('click',function(){
    let input = document.getElementById("input").value ;
    if(input == number){
        output.innerHTML = `you are right, your number is ${number}`;
    }
    else if(input < number){
        output.innerHTML = "you guessed too low";
    }
    else if(input > number){
        output.innerHTML = "you guessed too high";
    }
    
 })