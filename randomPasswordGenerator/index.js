

function generate(){
    const length =document.getElementById("passLength").value;

const lower=document.getElementById("lowerCase").checked;
const upper =document.getElementById("upperCase").checked;
const number =document.getElementById("number").checked;
const special =document.getElementById("symbols").checked;
const result = document.getElementById("result");

    const lowerChar ='abcdefghijklmnopqrstuvwxyz';
    const upperChar ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChar ='1234567890';
    const specialChar ='~!@#$%^&*()_-+=<>?/:;';
 

    let allowedChar=''
   
    
    allowedChar+= lower ? lowerChar : '';
   
    allowedChar+= upper ?  upperChar:'';
    allowedChar+= number?numberChar:'';
    
    allowedChar+= special?specialChar:'';
   
    let password=''
    if(length<1){
        console.log("(Password length cannot be less than 1)");
    }
    else if(allowedChar===''){
        console.log('select atleat 1 feild')
    }
    else
    {
        for (let i=0;i<length;i++){
            let idx = Math.floor(Math.random()*allowedChar.length);
            password+=allowedChar[idx];
        }
        result.textContent=`Generated password : ${password}`
        console.log(`Generated password : ${password}`);
    }
   

}




