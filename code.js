const line2=document.getElementsByClassName("firstLine")[0];
const numLine=document.getElementsByClassName("secondLine")[0];
const eqButt=document.querySelector("#eq");
const numbers=document.querySelectorAll("#num");
const action=document.querySelectorAll("#action");
const dotBt=document.querySelector("#dot");
const upBg=document.querySelector(".upBg");
const AC=document.querySelector("#MC");
const PM=document.querySelector("#PM");
let currentAction = "";
let currentNumber = "";
let firstNumber;
let monkey = document.querySelector("#actone");
let monkey2 = document.querySelector("#actunune");
let monkey3 = document.querySelector("#actionchik")
let dotExist = false;




action.forEach(i=> i.addEventListener("click", (e)=>{actionPressed(e)}));


AC.addEventListener("click", ()=>{
currentAction = "";
currentNumber = "";
firstNumber = "";
numLine.innerHTML="";
dotExist=false;
line2.innerHTML="";
})





function actionPressed(e){
    if (currentAction=="") 
    {
        if (e.target.innerText=="-") 
        {
            if (currentNumber=="") 
            {
                currentNumber="-";
                numLine.innerHTML="-";
                dotExist=false;
                line2.innerHTML="";
                return;
            }    
                    else{ 
                   numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
                    currentAction=e.target.innerText;
                    firstNumber=currentNumber;
                    currentNumber="0";
                    dotExist=false; 
                    line2.innerHTML="";
                    return;
                }
        }
        if (currentNumber=="") {
            err();
            return;
        }
        else{      
            numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
            currentAction=e.target.innerText;
            firstNumber=currentNumber;
            currentNumber="0"; 
            dotExist=false;
            line2.innerHTML="";
        }
 
    }
    else{
        err();
    }
}

PM.addEventListener("click", ()=>{

        if (numLine.innerHTML.length === 1 || (numLine.innerHTML.length === 2 && numLine.innerHTML[0] === "-")) {
            numLine.innerHTML = "";
        } else {
            numLine.innerHTML = numLine.innerHTML.slice(0, -1);
        }
})


dotBt.addEventListener("click", ()=>{
    if (currentNumber=="") {
        currentNumber+="0.";
        numLine.innerHTML+="0.";
        dotExist=true;
        line2.innerHTML="";
    }
    else if (!dotExist&&Number.isInteger(Number(currentNumber))) {
        currentNumber+=".";
        numLine.innerHTML+=".";
        dotExist=true;
        line2.innerHTML="";
    } else {
        err()
    }
})
numbers.forEach(i=> i.addEventListener("click", (e)=>{getNumber(e), line2.innerHTML="";}));

function getNumber(arg){
    if (arg == "get") {
        return(currentNumber);
    }
    currentNumber=currentNumber+arg.target.innerHTML;
    numLine.innerHTML=numLine.innerHTML+arg.target.innerHTML;
};


eqButt.addEventListener("click", ()=>{
    if (firstNumber !== "" && currentNumber !== "0") {

    firstNumber = parseFloat(firstNumber);
    currentNumber = parseFloat(currentNumber);
    line2.innerHTML=numLine.innerHTML+"=";
    var strFirstNumber = firstNumber + '',
    strCurrentNumber = currentNumber + '',
    dpFirstNumber = !!(firstNumber % 1) ? (strFirstNumber.length - strFirstNumber.indexOf('.') - 1) : 0, // Get total decimal places of firstNumber
    dpCurrentNumber = !!(currentNumber % 1) ? (strCurrentNumber.length - strCurrentNumber.indexOf('.') - 1) : 0, // Get total decimal places of currentNumber
    multiplier = Math.pow(10, dpFirstNumber > dpCurrentNumber ? dpFirstNumber : dpCurrentNumber), // Compare dpfirstNumber and dpcurrentNumber, then find value of 10 to the power of the largest between them.
    tempFirstNumber = Math.round(firstNumber * multiplier), // Multiply firstNumber by multiplier to eliminate all decimal places of firstNumber.
    tempCurrentNumber = Math.round(currentNumber * multiplier); // Multiply currentNumber by multiplier to eliminate all decimal places of currentNumber.

    function action(data) {

    switch (data) {

        case "DEL":
        deleteSymb();
        break;
        }
    }


    
      switch (currentAction) {

        case "+": numLine.innerHTML = (tempFirstNumber+tempCurrentNumber)/multiplier; break;
        case "-": numLine.innerHTML = (tempFirstNumber-tempCurrentNumber)/multiplier; break;
        case "÷": numLine.innerHTML = (tempFirstNumber/tempCurrentNumber);  break;
        case "×": numLine.innerHTML = (tempFirstNumber*tempCurrentNumber)/(multiplier*multiplier); break;
        case "%": numLine.innerHTML = (tempCurrentNumber/100*tempFirstNumber)/(multiplier*multiplier); break;
        case "^": numLine.innerHTML = (Math.pow(firstNumber, currentNumber)); break;

    }
    
    currentNumber=numLine.innerHTML;
    currentAction = "";
} else{err();}
 
    }
   
);

function deleteSymb() {

    if (numLine.value.length === 1 || (numLine.value.length === 2 && numLine.value[0] === "-")) {
        numLine.value = "0";
    } else {
        numLine.value = numLine.value.slice(0, -1);
    }
  
  
  
  }