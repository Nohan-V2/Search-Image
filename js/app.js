const $mainWrapper = document.querySelector(".main-wrapper");

const $linkImg = document.querySelectorAll("a");
const $img = document.querySelectorAll("img");

const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>`;

const arrowLeft = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;

const arrowRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;

document.addEventListener("DOMContentLoaded", (e) => {
  // Retire le comportement par défaut du lien
  $linkImg.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  let tableImg = [];

  // Affiche la modale
  $img.forEach((img) => {
    tableImg.push(img);

    console.log(tableImg);

    const $modal = document.createElement("div");
    $modal.classList.add("lightbox");
    $modal.classList.add("hidden");
    $mainWrapper.appendChild($modal);

    const $modalContent = document.createElement("div");
    $modalContent.classList.add("lightbox-content");
    $modal.appendChild($modalContent);

    const $modalImg = document.createElement("img");
    $modalImg.classList.add("lightbox-img");
    $modalImg.src = img.src.replace("/thumbnails", "");
    $modalImg.alt = img.alt;
    $modalContent.appendChild($modalImg);

    const $arrowLeft = document.createElement("svg");
    $arrowLeft.classList.add("lightbox-arrow-left");
    $arrowLeft.innerHTML = arrowLeft;
    $modalContent.appendChild($arrowLeft);

    const $arrowRight = document.createElement("svg");
    $arrowRight.classList.add("lightbox-arrow-right");
    $arrowRight.innerHTML = arrowRight;
    $modalContent.appendChild($arrowRight);

    const $ModalTitle = document.createElement("p");
    $ModalTitle.classList.add("lightbox-title");
    $ModalTitle.textContent = img.title;
    $modalContent.appendChild($ModalTitle);

    const $closeModal = document.createElement("svg");
    $closeModal.classList.add("lightbox-close");
    $closeModal.innerHTML = closeIcon;
    $modalContent.appendChild($closeModal);

    img.addEventListener("click", (e) => {
      $modal.classList.remove("hidden");
    });

    // Left arrow
    $arrowLeft.addEventListener("click", (e) => {});

    // Right arrow
    $arrowRight.addEventListener("click", (e) => {});

    // Close modal
    $closeModal.addEventListener("click", (e) => {
      $modal.classList.add("hidden");
    });
  });
});
