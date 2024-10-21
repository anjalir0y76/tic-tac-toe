let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerO playerX

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const enabledBoxes=()=>
    {
        for (let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
const resetGame=()=>
{
    turnO=true;
    enabledBoxes();
    container.classList.add("hide");

}
let count=0;
boxes.forEach((box)=>
{
    
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
            count++;
        }
        else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled=true;

        checkWinner();

    })

});

const disabledBoxes=()=>
{
    for (let box of boxes){
        box.disabled=true;
    }
}

const showDraw=()=>
{
    msg.innerText=("No one wins!!");
    container.classList.remove("hide");
    disabledBoxes();
}
const showWinner=(winner)=>
{
    msg.innerText= (`Congratulations,Winner is ${winner}`);
    container.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>{
    console.log(count);
    for(let pattern of winPatterns)
    {

        
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!="" )
        {
            if(posVal1===posVal2 && posVal2===posVal3)
            {
                showWinner(posVal1);
            }
            
            
        }

    }
    if(count===9)
    {
        showDraw();
    }
    
}

reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);

