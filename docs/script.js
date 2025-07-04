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
  });

  const slides = document.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000); // 4秒ごとに切り替え
