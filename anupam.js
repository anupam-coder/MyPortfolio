

let readMore = document.querySelector(".ReadMore");
readMore.addEventListener('click', func1);

function func1(){
    window.open("https://www.linkedin.com/in/anupam-patra-921634ab/");
}

let cv = document.querySelector("#cv");
cv.addEventListener('click', func2);

function func2(){
    window.open("https://drive.google.com/file/d/1rjuPB5vHPAg7EZoRPAo87vgsmsZVqs47/view?usp=sharing");
}
/* Modal Pop-UP

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    console.log(document.getElementById(modalId).classList);
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
      console.log(this.parentElement.parentElement.parentElement.classList);
    this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

*/

var send = document.querySelector(".contact-form");

send.addEventListener("submit", sendMsg);

function sendMsg() {

/**
 * @type HTMLInputElement
 */
var name = document.getElementById("name").value;
var email = document.querySelector("#email").value;
var subject = document.querySelector("#subject").value;
var msg = document.querySelector("#message").value;
Email.send({
  Host: "smtp.gmail.com",
  Username : "anupampatra1995@gmail.com",
  Passowrd : "guddupatra",
  To : 'anupampatra1995@gmail.com',
From : "anupampatra1995@gmail.com",
Subject : `${subject}`,
Body : `From:${email} Message:${msg}`,
}).then((message) => alert(`Dear ${name}, your mail has been sent successfully`));
//sendEmail(name, email, subject, msg);
	// Email.send({
	// Host: "smtp.gmail.com",
	// Username : "<sender’s email address>",
	// Password : "<email password>",
	// To : '<recipient’s email address>',
	// From : "<sender’s email address>",
	// Subject : "<email subject>",
	// Body : "<email body>",
	// }).then(
	// 	message => alert("mail sent successfully")
	// );
}


let github = document.querySelector(".fa-github");
let twitter = document.querySelector(".fa-twitter");
let facebook = document.querySelector(".fa-facebook");
let insta = document.querySelector(".fa-instagram");
let watsapp = document.querySelector(".fa-whatsapp");
let linkedin = document.querySelector(".fa-linkedin");
let youtube = document.querySelector(".fa-youtube");

github.addEventListener('click', gitOpen);

function gitOpen(){
  window.open("https://github.com/anupam-coder");
}

linkedin.addEventListener('click', liOpen);

function liOpen(){
 window.open("https://www.linkedin.com/in/anupam-patra-921634ab/");	
}

