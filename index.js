var a = (Math.floor(Math.random() * 6)) + 1;
var b = (Math.floor(Math.random() * 6)) + 1;
document.querySelector("img.img1").setAttribute("src", "images/dice" + a + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + b + ".png");
if (a > b) {
  document.querySelector("h1").innerHTML = "Player1 Wins";
} else if (a < b) {
  document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw";
}
