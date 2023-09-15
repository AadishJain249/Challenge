const b1 = document.getElementById("box1");
const b2 = document.getElementById("box2");
const b3 = document.getElementById("box3");
const b4 = document.getElementById("box4");
const b5 = document.getElementById("box5");
const b6 = document.getElementById("box6");
const b7 = document.getElementById("box7");
const b8 = document.getElementById("box8");
const b9 = document.getElementById("box9");
let first_move = true;
let count = 0;
let mark = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let restart = 0;
function play_again() {
  window.location.reload();
}
function check(mark) {
  // diagonol
  if ((mark[0] == "X" && mark[4] == "X" && mark[8] == "X") || (mark[0] == "0" && mark[4] == "0" && mark[8] == "0" )|| (mark[6] == "X" && mark[4] == "X" && mark[2] == "X") ||(mark[6] == "0" && mark[4] == "0" && mark[2] == "0")) {
    if (mark[0] == "X") {
      alert("Player2 Wins");
      restart = 1;
      play_again();
    } else {
      alert("Player1 Wins");
      restart = 1;
      play_again();
    }
  }
  //column
  for (i = 0; i < 9; i += 3) {
    if ((mark[i] == "X" && mark[i + 1] == "X" && mark[i + 2] == "X") ||(mark[i] == "0" && mark[i + 1] == "0" && mark[i + 2] == "0")) {
      if (mark[i] == "X") {
        alert("Player2 Wins");
        restart = 1;
        play_again();
      } else {
        alert("Player1 Wins");
        restart = 1;
        play_again();
      }
      break;
    }
  }

  for (i = 0; i < 3; i++) {
    if (
      (mark[i] == "X" && mark[i + 3] == "X" && mark[i + 6] == "X") ||
      (mark[i] == "0" && mark[i + 3] == "0" && mark[i + 6] == "0")
    ) {
      if (mark[i] == "X") {
        alert("Player2 Wins");
        restart = 1;
        play_again();
      } else {
        alert("Player1 Wins");
        restart = 1;
        play_again();
      }
      break;
    }
  }
}
b1.addEventListener("click",() => {
    if (first_move) {
      b1.innerHTML = "0";
      first_move = false;
      mark[0] = "0";
      check(mark);
    } else {
      b1.innerHTML = "X";
      first_move = true;
      mark[0] = "X";
      check(mark);
    }
    count += 1;
    if (count == 9) {
      play_again();
    }
  },
  { once: true }
);

b2.addEventListener("click",() => {
    if (first_move) {
      b2.innerHTML = "0";
      first_move = false;
      mark[1] = "0";
      check(mark);
    } else {
      b2.innerHTML = "X";
      first_move = true;
      mark[1] = "X";
      check(mark);
    }

    count += 1;
    if (count == 9) {
      play_again();
    }
  },
  { once: true }
);

b3.addEventListener("click",() => {
    if (first_move) {
      b3.innerHTML = "0";
      first_move = false;
      mark[2] = "0";
      check(mark);
    } else {
      b3.innerHTML = "X";
      first_move = true;
      mark[2] = "X";
      check(mark);
    }
    if (count == 9) {
      play_again();
    }
    count += 1;
  },
  { once: true }
);
b4.addEventListener("click",() => {
    if (first_move) {
      b4.innerHTML = "0";
      first_move = false;
      mark[3] = "0";
      check(mark);
    } else {
      b4.innerHTML = "X";
      first_move = true;
      mark[3] = "X";
      check(mark);
    }

    count += 1;
    if (count == 9) {
      play_again();
    }
  },
  { once: true }
);

b5.addEventListener("click",() => {
    if (first_move) {
      b5.innerHTML = "0";
      first_move = false;
      mark[4] = "0";
      check(mark);
    } else {
      b5.innerHTML = "X";
      first_move = true;
      mark[4] = "X";
      check(mark);
    }
    count += 1;
    if (count == 9) {
      play_again();
    }
  },
  { once: true }
);

b6.addEventListener("click",() => {
    if (first_move) {
      b6.innerHTML = "0";
      first_move = false;
      mark[5] = "0";
      check(mark);
    } else {
      b6.innerHTML = "X";
      first_move = true;
      mark[5] = "X";
      check(mark);
    }
    count += 1;
    if (count == 9) {
      play_again();
    }
  },
  { once: true }
);

b7.addEventListener("click",() => {
    if (first_move) {
      b7.innerHTML = "0";
      first_move = false;
      mark[6] = "0";
      check(mark);
    } else {
      b7.innerHTML = "X";
      first_move = true;
      mark[6] = "X";
      check(mark);
    }
    count += 1;
    if (count == 9) {
      play_again();
    }
  },{ once: true }
);

b8.addEventListener("click",() => {
    if (first_move) {
      b8.innerHTML = "0";
      first_move = false;
      mark[7] = "0";
      check(mark);
    } else {
      b8.innerHTML = "X";
      first_move = true;
      mark[7] = "X";
      check(mark);
    }
    count += 1;
    if (count == 9) {
      play_again();
    }
  },{ once: true }
);
b9.addEventListener("click",() => {
    if (first_move) {
      b9.innerHTML = "0";
      first_move = false;
      mark[8] = "0";
      check(mark);
    } else {
      b9.innerHTML = "X";
      first_move = true;
      mark[8] = "X";
      check(mark);
    }
    count += 1;
    if (count == 9) {
      play_again();
    }
  },{ once: true }
);
