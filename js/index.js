const footer = document.querySelector('[data-js="article-preview__footer"]');
const author = document.querySelector('[data-js="article-preview__author"]');
const sharePopup = document.querySelector('[data-js="share-popup"]');
const shareButton = document.querySelector('[data-js="share-button"]');
const buttonIcon = document.querySelector('[data-js="button-icon"]');

const breakpoint = 1200;

shareButton.addEventListener("click", (event) => {
  if (window.innerWidth < breakpoint) {
    footer.classList.toggle("show-popup--bg-color");
    author.classList.toggle("show-popup");
    sharePopup.classList.toggle("show-popup");
    shareButton.classList.toggle("show-popup__button--dark");
    buttonIcon.classList.toggle("show-popup-button__icon--white");
  } else {
    sharePopup.classList.toggle("show-popup");
    shareButton.classList.toggle("show-popup__button--dark");
    buttonIcon.classList.toggle("show-popup-button__icon--white");
  }
});

window.addEventListener("resize", () => {
  window.location.reload();
});
