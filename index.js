let x=document.querySelector("#corss");
let o=document.querySelector("#zero");
let square=document.querySelectorAll(".square");
let parSquare=document.querySelector(".bottomWrapper");
let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
let box5=document.querySelector("#box5");
let box6=document.querySelector("#box6");
let box7=document.querySelector("#box7");
let box8=document.querySelector("#box8");
let box9=document.querySelector("#box9");
let lines=document.querySelectorAll(".line");
let wonSymbolX=document.querySelector(".wonSymbolX");
let wonSymbolO=document.querySelector(".wonSymbolO");
let topWrapper=document.querySelector(".overlay");
let displayX=document.querySelector("#displayWonX");
let displayO=document.querySelector("#displayWonO");
let alertText=document.querySelector("#alertText");
let X="X";
let O="O";
let flag=X;
var wonByX=0;
var wonByO=0;
var index=-1;
var whoWon;
var totalSelected=0;
var array=[[box1,box2,box3],
      [box1,box4,box7],
      [box1,box5,box9],
      [box3,box6,box9],
      [box3,box5,box7],
      [box7,box8,box9],
      [box4,box5,box6],
      [box2,box5,box8]];
// parSquare.addEventListener("click",perform);
square.forEach(element => {
    element.addEventListener("click",perform);
});
function perform(e){
     if(!(e.target.classList.contains("crossed")||e.target.classList.contains("zeroed"))){
        if(flag=="X"){
            let cross=x.cloneNode(true);
            e.target.appendChild(cross);
            e.target.classList.add("crossed");
            flag=O;
            totalSelected +=1;
        }
        else if(flag=="O"){
            let zero=o.cloneNode(true);
            e.target.appendChild(zero);
            e.target.classList.add("zeroed");
            flag=X;
            totalSelected +=1;
        }
        checkedWin();
    }
}
var newFlag;
var count;
function checkedWin(){
    count=0;
    newFlag=false;
      for(boxes of array){
        var countX=0;
        var countO=0;
          for(subBoxes of boxes){
            if(subBoxes.classList.contains("crossed"))
               countX +=1;
            if(subBoxes.classList.contains("zeroed"))
               countO +=1;
          }
          if(countX==3){
            highlight(count,"X");
            countX=0;
            newFlag=true;
            break;
          }
          else if(countO==3){
            highlight(count,"O");
            countO=0;
            newFlag=true;
            break;
          }
          count +=1;
          if(newFlag)
            break;
      }
      if(totalSelected==9){
        totalSelected=0;
        topWrapper.style.display="flex";
        alertText.innerText="DRAW!!";
        setTimeout(()=>{
            totalSelected=0;
            for(let i=0;i<square.length;i++){
                let element=square[i];
                element.innerHTML="";
                element.classList.remove("crossed");
                element.classList.remove("zeroed");
            }
            topWrapper.style.display="none";   
        },1500);
    }
}
function highlight(cnt,whoWon){
    totalSelected=0;
    console.log(whoWon);
    lines[cnt].classList.add("active");
    topWrapper.style.display="flex";
    setTimeout(()=>{
        for(let i=0;i<square.length;i++){
            let element=square[i];
            element.innerHTML="";
            element.classList.remove("crossed");
            element.classList.remove("zeroed");
        }
        lines[cnt].classList.remove("active");
        wonSymbolX.style.display="none";
        wonSymbolO.style.display="none";
        topWrapper.style.display="none";
        
    },1500);
    if(whoWon=="X"){
        wonSymbolX.style.display="block";
        alertText.innerText="WON";
        wonByX +=1
        setTimeout(()=>{
            displayX.classList.add("animate");
        },1500);
        setTimeout(()=>{
        displayX.innerText=wonByX;
        displayX.classList.remove("animate");
        },1800);
    }
    else if(whoWon=="O"){
        wonSymbolO.style.display="block";
        alertText.innerText="WON";
        wonByO +=1;
        setTimeout(()=>{
            displayO.classList.add("animate");
        },1500);
        setTimeout(()=>{
            displayO.innerText=wonByO;
            displayO.classList.remove("animate");
            },1800);
    }
    // -----------------
}

