document.addEventListener('DOMContentLoaded', () => {
  let isOpen = false;
  
  const toggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.main-nav');
  
  toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;
    navMenu.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', isOpen);
    toggleButton.textContent = isOpen ? '✕' : '☰';
  });
  
  // slide show
  const slides = document.querySelectorAll('.slide');
  let current = 0;
  
  if (document.querySelector('.slide')) {
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000); // 4秒ごとに切り替え
  }
  
  // modal
  const modal = document.getElementById("modal");
  const modalImg = document.querySelector(".modal-img");
  // const modalCaption = document.querySelector(".modal-caption"); // 必要なら
  const closeBtn = document.querySelector(".close");
  const images = Array.from(document.querySelectorAll("img"));
  const modalImages = images.filter(img => !img.classList.contains("header-icon"));
  let currentIndex = 0;

  function toggleScrollLock(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
  }

  function showModal(index) {
    if(modalImages[index]) {
      modal.style.display = "flex";
      modalImg.src = modalImages[index].src;
      modalImg.alt = modalImages[index].alt || "画像プレビュー";
      // if (modalCaption) {
      //   modalCaption.textContent = images[index].dataset.caption || images[index].alt || "";
      // }
      toggleScrollLock(true);
      currentIndex = index;
    }
  }

  images.forEach((img, i) => {
    if (!img.classList.contains("header-icon")) {
      img.addEventListener("click", () => showModal(i-1));
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    toggleScrollLock(false);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      toggleScrollLock(false);
    }
  });

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showModal(currentIndex);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    if (modalImages.length > 0) {
      currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
      showModal(currentIndex);
    }
  });
});