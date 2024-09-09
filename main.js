console.log("contact-form");

// mouse eneter
const hoverlname = (document.getElementById("lname").onmouseenter = () => {
  document.querySelector("#lname").style.borderColor = "aqua";
  document.querySelector("#lname").style.cursor = "pointer";
});

const hoverflnem = (document.getElementById("fname").onmouseenter = () => {
  document.querySelector("#fname").style.borderColor = "aqua";
  document.querySelector("#fname").style.cursor = "pointer";
});

// mouse leaves
document.getElementById("fname").onmouseleave = () => {
  document.querySelector("#fname").style.border = "1px solid black";
};

document.getElementById("lname").onmouseleave = () => {
  document.querySelector("#lname").style.border = "1px solid black";
};

const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const request = document.getElementById("request");
const enquiry = document.getElementById("enquiry");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const error = document.getElementsByClassName("err");
const inputs = document.getElementsByClassName("input");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const err = [];
  if (!firstname.value) {
    err.push({ idx: 0, msg: "" });
    firstname.style.border = "1px solid red";
  }
  if (!lastname.value) {
    err.push({ idx: 1, msg: "" });
    lastname.style.border = "1px solid red";
  }
  if (!email.value) {
    err.push({ idx: 2, msg: "" });
    email.style.border = "1px solid red";
  }
  if (!enquiry.checked && !request.checked) {
    err.push({ idx: 3, msg: "" });
    enquiry.style.border = "1px solid red";
  }
  if (!message.value) {
    err.push({ idx: 4, msg: "" });
    message.style.border = "1px solid red";
  }
  if (!checkbox.checked) {
    err.push({ idx: 5, msg: "" });
    checkbox.style.border = "1px solid red";
  }
  if (err.length) {
    for (const idx in error) {
      for (const item of err) {
        if (idx == item.idx) {
          error[idx].style.display = "block";
        }
      }
    }
  }
});


for(const idx of inputs){
  if(input[idx].type === "radio"){
    inputs[idx].addEventListener("keydown", () => {
      inputs[idx].style.borderColor = "initial";
      error[idx].style.display = "none";
  });
  }
  }
  

message.addEventListener("keydown", () => {
  message.style.borderColor = "initial";
});