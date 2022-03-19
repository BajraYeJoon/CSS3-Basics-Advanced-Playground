var backdrop = document.querySelector(".backdrop");
var planButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--no");
var toggler = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");


console.dir(planButtons);

for (var i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    // modal.className = 'open';  this  will override the actual classes
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

const closeModal = () => {
  // modal.style.display = "none";
  // backdrop.style.display = "none";

  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
};

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

toggler.addEventListener("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

