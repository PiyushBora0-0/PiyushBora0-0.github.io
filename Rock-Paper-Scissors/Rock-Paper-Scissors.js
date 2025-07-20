const choices =['👊','✋','✌️'];

const playerMove = document.getElementById('playerMove');

const computerMove = document.getElementById('computerMove');

const result = document.getElementById('result');

let Cmove =''

function play(move){

    result.classList.remove("greenText","redText");// removes color grom result when starting new game

    let index = Math.floor(Math.random()*3);//generate random index from 0-2

    Cmove =  choices[index]; // assigns the move at $index in choices to Cmove

    if (move===Cmove){         // if both moves are same
        result.textContent = 'Its a Tie!';
    }
    else{
        // if the player wins
        if(move ==='👊' && Cmove ==='✌️' || move === '✋' && Cmove ==='👊' || move ==='✌️' && Cmove === '✋'){ 
            result.textContent='You win 🥳';
            result.classList.add('greenText');
        }

        // if player looses
        else{
            
            result.textContent ='You Lost 😭';
            result.classList.add('redText');
        }
    }
    //shows the moves selected
    playerMove.textContent=`Player : ${move}`;
    computerMove.textContent = `Computer : ${Cmove}`;
}