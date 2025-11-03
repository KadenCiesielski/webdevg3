// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Gallery Modal Function
function openModal(src, caption) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("modal-img").src = src;
  document.getElementById("modal-caption").innerHTML = caption;
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }
});

// LIGHTBOX SCRIPT
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".sidebar-open");
  const closeButtons = document.querySelectorAll(".sidebar-close");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  if (openButton) {
    openButton.addEventListener("click", w3_open);
  }

  const closeTriggers = [
    ...Array.from(closeButtons),
    ...Array.from(sidebarLinks),
  ];

  closeTriggers.forEach((el) => {
    el.addEventListener("click", w3_close);
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  if (lightbox && lightboxImg && closeBtn) {
    // When any gallery image is clicked
    document.querySelectorAll(".enlarge-link img").forEach((img) => {
      img.addEventListener("click", function (e) {
        e.preventDefault();
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
      });
    });

    // Close when clicking the close button or outside the image
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  // Change icon size on load (if any .w3-icon elements are present)
  var elems = document.querySelectorAll(".w3-icon");
  elems.forEach(function (el) {
    el.classList.add("w3-xxlarge");
  });
});

// Hamburger menu toggle function
function toggleMenu() {
  const menu = document.getElementById("smallMenu");
  const btn = document.querySelector('[aria-controls="smallMenu"]');
  const isShown = menu.classList.contains("w3-show");

  menu.classList.toggle("w3-show");
  menu.setAttribute("aria-hidden", isShown ? "true" : "false");
  btn.setAttribute("aria-expanded", isShown ? "false" : "true");
}
