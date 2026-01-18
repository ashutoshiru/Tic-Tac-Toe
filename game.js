let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let Winner = document.querySelector(".Winner");
let Massage = document.querySelector("Massage");
let hide = document.querySelector(".hide");

let turn = true;
const winPatterns = [
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
    console.log("Box was clicked");
    if (turn === true) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let patterns of winPatterns) {
    // console.log(patterns);
    // console.log(patterns[0], patterns[1], patterns[2]);
    // console.log(boxes[patterns[0]].innerText,
    //     boxes[patterns[1]].innerText,
    //     boxes[patterns[2]].innerText);

    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(`Winner is ${pos1Val}`);
        Winner.innerText = `Congratulation Winner is:- ${pos1Val}`;
        hide.classList.remove("hide");
      } 
    }


  }
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turn = true;
  Winner.innerText = "Winner is:-";
  hide.classList.add("hide");
});
