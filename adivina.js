

var randomNumber;
var numberChooseByUser;
var result;

function initRandomNumber(){
    randomNumber = Math.floor(Math.random() * 8);
 numberChooseByUser=document.getElementById("inputNumber");
 result=document.getElementById("result");
 setTimeout(judgeTheNumber,1);
}

function judgeTheNumber()
{
    if(numberChooseByUser.value==""){
        result.textContent="Pon un  numero";
        result.style.color="red";
    }
    else{
        if(randomNumber==numberChooseByUser.value){
            result.textContent="Bien hecho fenómeno";
            result.style.color="green";
        }
        else if(randomNumber>numberChooseByUser.value){
            result.textContent="Algo más fenómeno";
        }
        else{
            result.textContent="Algo menos fenómeno";
        }
    }

    setTimeout(judgeTheNumber,1);
}
function replay(){
    randomNumber = Math.floor(Math.random() * 8);
    numberChooseByUser.value="";
}