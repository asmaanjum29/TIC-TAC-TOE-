let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msg=document.querySelector(".msg");
let msgs=document.querySelector("#msgs");
let turnO=true;
let count=0;

const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

const resetgame=()=>{
    turnO=true;
    count=0;
    enablebox();
    msg.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count==9&&!iswinner){
            gamedraw();
        }
    })
}
);
const gamedraw = () => {
  msgs.innerText = `Game was a Draw.`;
  msg.classList.remove("hide");
  disablebox();
};
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msgs.innerText=`congratulations winner is ${winner}`;
    msg.classList.remove("hide");
    disablebox();
};
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                showWinner(pos1);
                //disablebox();
                return true;
            }

        
        }

    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



