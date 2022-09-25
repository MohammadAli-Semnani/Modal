const modal = document.querySelector(".modal-container");
const content = document.querySelector(".modal-content");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

function dilay() {
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    content.style.animation = "animateTop .5s";
});

closeBtn.addEventListener("click", () => {
    content.style.animation = "animateBotton .5s";
    dilay();
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    content.style.animation = "animateBotton .5s";
    dilay();
  }
});
