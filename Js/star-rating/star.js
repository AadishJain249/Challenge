let stars = document.getElementById("star");
let len = document.getElementById("count");
let child = stars.children;
for (var i = 0; i < 5; i++) {
  var x = document.createElement("i");
  x.classList.add("fa", "fa-star","fa-4x");
  stars.appendChild(x);
}
let val = -1;
stars.addEventListener("click", function (e) {
  var index = Array.prototype.indexOf.call(stars.children, e.target);
  len.innerHTML = index + 1;
  val = index;
  for (let i = 0; i <= index; i++) {
    if (i <= index) child[i].style.color = "yellow";
  }
  for (let i = index + 1; i <= 5; i++) {
    child[i].style.color = "black";
  }
});

stars.addEventListener("mouseover", function (e) {
  var index = Array.prototype.indexOf.call(stars.children, e.target);
  for (let i = 0; i <= index; i++) {
    child[i].style.color = "yellow";
  }
  for (let i = index + 1; i <= 5; i++) {
    child[i].style.color = "black";
  }
});
stars.addEventListener("mouseleave", function (e) {
  for (let i = 0; i <= val; i++) {
    child[i].style.color = "yellow";
  }

  for (let i = val + 1; i <= 4; i++) {
    child[i].style.color = "black";
  }
});
