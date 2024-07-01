const spinnerEL = document.querySelector(".spinner");
window.addEventListener("load", () => {
  spinnerEL.style.display = "block";
  setTimeout(() => {
    spinnerEL.style.display = "none";
  }, 2000);
});
// ****************************************************************