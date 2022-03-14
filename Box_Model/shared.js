var backdrop = document.querySelector(".backdrop");
var planButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--no");

console.dir(planButtons);

for (var i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

const closeModal = () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
};

backdrop.addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);
