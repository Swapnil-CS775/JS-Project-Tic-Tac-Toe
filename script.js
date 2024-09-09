let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame=document.querySelector(".newgame")
let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = "true";

    checkwinner();
  });
});

const checkwinner = () => {

  for (let pattern of winpattern) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 == position2 && position2 == position3) {
        winner(position1);
      }
    }
  }
};

const winner=(position1)=>
{
    let msg=document.querySelector(".msg");
    msg.innerText="Winner is "+position1;
    msg.classList.remove("hide");
    disablebtn();
}

const disablebtn=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const enablebtn=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const resetgame=()=>{
    turn0=true;
    enablebtn();
    let msg=document.querySelector(".msg");
    msg.classList.add("hide");
}

newgame.addEventListener("click",()=>
{
    resetgame();
})

reset.addEventListener("click",()=>
{
    resetgame();
})