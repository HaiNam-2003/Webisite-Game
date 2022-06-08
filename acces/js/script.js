const signIn = document.querySelector(".js-sign-in");
const signOut = document.querySelector(".js-sign-out");
const modalDangki = document.querySelector(".modal-dangki");
const modal = document.querySelector(".modal");
const close = document.querySelector(".js-close");
const dangKiClose = document.querySelector(".dangki-close");

function openModal() {
  modal.classList.add("open");
}

function openModalDangKi() {
  modalDangki.classList.add("open");
}

function removeModalDangki() {
  modalDangki.classList.remove("open");
}

function removeModal() {
  modal.classList.remove("open");
}

signOut.addEventListener("click", openModalDangKi);
dangKiClose.addEventListener("click", removeModalDangki);
signIn.addEventListener("click", openModal);
close.addEventListener("click", removeModal);

// đáng kí, đăng nhập
var correctUser = "quachhainam";
var correctPassword = "123456";

var inputUsername = document.getElementById("input-user");
var inputpassword = document.getelementById("input-password");

var formSignIn = document.getElementById("modal-js");

if (formSignIn.attachEvent) {
  formSignIn.attachEvent("submit", onFormSubmit);
} else {
  formSignIn.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(e) {
  var username = inputUsername.value;
  var password = inputpassword.value;

  if (username == correctUser && password == correctPassword) {
    alert("Dang nhap thanh cong");
  } else {
    alert("Dang nhap khong thanh cong");
  }
}
