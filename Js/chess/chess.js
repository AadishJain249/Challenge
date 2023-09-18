const b1 = document.getElementById("box1");
const b2 = document.getElementById("box2");
const b3 = document.getElementById("box3");
const b4 = document.getElementById("box4");
const b5 = document.getElementById("box5");
const b6 = document.getElementById("box6");
const b7 = document.getElementById("box7");
const b8 = document.getElementById("box8");
for (let i = 1; i <= 8; i++) {
  const temp = document.getElementById(`box${i}`);
  for (j = 0; j < 8; j++) {
    const create = document.createElement("div");
    create.style.display = "flex";
    create.style.width = "50px";
    create.style.height = "47px";
    create.style.border = "2px solid ";
    if (i % 2 == 0) {
      if (j % 2 == 0) create.style.backgroundColor = "white";
      else create.style.backgroundColor = "#1A1110";
    } else {
      if (j % 2 == 0) create.style.backgroundColor = "#1A1110";
      else create.style.backgroundColor = "white";
    }
    temp.appendChild(create);
    temp.style.display = "flex";
  }
}
function clickHandler(row, col) {
  if (col != 0) {
    let temp = row + 1;
    for (let i = col; i >= 0; i--) {
      if (temp == 9) break;
      const box = document.getElementById(`box${temp}`);
      const child = box.children;
      child[i].style.backgroundColor = "yellow";
      temp += 1;
    }
    temp = row + 1;

    for (let i = col; i < 8; i++) {
      if (temp == 9) break;
      const box = document.getElementById(`box${temp}`);
      const child = box.children;
      child[i].style.backgroundColor = "yellow";
      temp += 1;
    }
    temp = row + 1;
    for (let i = col; i < 8; i++) {
      if (temp == 0) break;
      const box = document.getElementById(`box${temp}`);
      const child = box.children;
      child[i].style.backgroundColor = "yellow";
      temp -= 1;
    }
    temp = row + 1;
    for (let i = col; i >= 0; i--) {
      if (temp == 0) break;
      const box = document.getElementById(`box${temp}`);
      const child = box.children;
      child[i].style.backgroundColor = "yellow";
      temp -= 1;
    }
  } else if (col == 0) {
    let temp = row + 1;
    if (temp == 8) {
      for (let i = col; i < 8; i++) {
        if (temp == 0) break;
        const box = document.getElementById(`box${temp}`);
        const child = box.children;
        child[i].style.backgroundColor = "yellow";
        temp -= 1;
      }
    } else if (temp != 1 && col == 0) {
      for (let i = col; i < 8; i++) {
        if (temp == 9) break;
        const box = document.getElementById(`box${temp}`);
        const child = box.children;
        child[i].style.backgroundColor = "yellow";
        temp += 1;
      }
      temp = row + 1;
      for (let i = col; i < 8; i++) {
        if (temp == 0) break;
        const box = document.getElementById(`box${temp}`);
        const child = box.children;
        child[i].style.backgroundColor = "yellow";
        temp -= 1;
      }
    } else {
      for (let i = col; i < 8; i++) {
        if (temp == 9) break;
        const box = document.getElementById(`box${temp}`);
        const child = box.children;
        child[i].style.backgroundColor = "yellow";
        temp += 1;
      }
    }
  }
}
b1.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b1.children, e.target);
  clickHandler(0, index);
});

b2.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b2.children, e.target);
  clickHandler(1, index);
});
b3.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b3.children, e.target);
  clickHandler(2, index);
});
b4.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b4.children, e.target);
  clickHandler(3, index);
});
b5.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b5.children, e.target);
  clickHandler(4, index);
});
b6.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b6.children, e.target);
  clickHandler(5, index);
});
b7.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b7.children, e.target);
  clickHandler(6, index);
});
b8.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(b8.children, e.target);
  clickHandler(7, index);
});