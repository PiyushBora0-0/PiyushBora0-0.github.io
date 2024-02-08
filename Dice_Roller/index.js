function roll(){

    const numOfDice = document.getElementById("textbox").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let values =[];
    let images =[];
    for (let x = 0;  x<numOfDice ; x++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt ="Dice ${values}" >`);
    }
    diceResult.textContent = "Dice : "+values.join(' , ');
    diceImages.innerHTML =  images.join('');
}