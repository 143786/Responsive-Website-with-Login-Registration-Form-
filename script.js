const showPopupBtn = document.querySelector(".login-btn");

const hidePopupBtn = document.querySelector(".login-btn");

showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});
