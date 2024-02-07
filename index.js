const textbox = document.getElementById("textbox");
const toFahrenheight = document.getElementById("toFahrenheight");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;


function convert(){
    temp = Number(textbox.value);

    if(toFahrenheight.checked){
        temp= (9/5)*temp+32;
        result.textContent = `${temp} °F`;
    }
    else if(toCelcius.checked){
        temp = (5/9)*(temp-32);
        result.textContent = `${temp} °C`;
    }
    else{
        result.textContent="please enter a unit";
    }
    
}