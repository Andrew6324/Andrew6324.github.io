console.log("the message!");



const theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
let theImage = document.querySelector('img')
// console.log(theTxt)

theButton.addEventListener('click', isClicked);
// isClicked();
function isClicked() {
 console.log("clicked!");
 theImage.src = "https://media2.giphy.com/media/mACq9GTltV8nC/giphy.gif?cid=ecf05e47daca594ac42eba1174ece64945a2d377a5009879&rid=giphy.gif";
 theTxt.textContent = "You made her happy now!";
 theTxt.style.color = "white"
 theBody.style.backgroundColor = "black";
 theBody.style.backgroundImage = "https://media2.giphy.com/media/26ufo4EIIEdB8tX3y/giphy.webp?cid=ecf05e4743a0efc2f6f4afa1274eae9930bfdef6f6304d0e&rid=giphy.webp"
 theImage.style.rightmargin = "0";

}

