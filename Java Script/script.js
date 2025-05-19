document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.querySelector("nav");

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const textArray = ["Freelancer", "Desarrollador", "Diseñador", "Programador", "Talento Tech"];
  const typingDelay = 100;
  const erasingDelay = 60;
  const newTextDelay = 1500;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      setTimeout(type, typingDelay + 100);
    }
  }

  if (typedTextSpan && cursorSpan && textArray.length > 0) {
    cursorSpan.classList.add("typing");
    setTimeout(type, newTextDelay);
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Formulario enviado");
    });
  }

  const slides = document.querySelectorAll(".portfolio-slide");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.transition = "opacity 1s ease-in-out";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  if (totalSlides > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
  }

  // Lista desplegable "Sobre mí"
  const btn = document.getElementById("sobre-mi-btn");
  const list = document.getElementById("sobre-mi-list");

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (list.classList.contains("show")) {
      list.classList.remove("show");
    } else {
      const btnRect = btn.getBoundingClientRect();
      const navRect = btn.parentElement.getBoundingClientRect();
      list.style.top = btnRect.bottom - navRect.top + "px";
      list.style.left = btnRect.left - navRect.left + "px";
      list.classList.add("show");
    }
  });

  document.addEventListener("click", function (event) {
    if (!btn.contains(event.target) && !list.contains(event.target)) {
      list.classList.remove("show");
    }
  });
});

function showLink(event, link) {
  event.preventDefault();
  const popup = document.getElementById("popup");
  const popupLink = document.getElementById("popup-link");

  if (popup && popupLink) {
    popupLink.textContent = link;
    popupLink.href = link;
    popup.style.display = "block";
  }
}

function copyLink() {
  const popupLink = document.getElementById("popup-link");
  if (popupLink) {
    const text = popupLink.textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Enlace copiado: " + text);
    }).catch(() => {
      alert("Error al copiar enlace.");
    });
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "none";
  }
}
