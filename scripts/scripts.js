// LIGHTBOX SCRIPT
document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
  
    // When any gallery image is clicked
    document.querySelectorAll(".enlarge-link img").forEach(img => {
      img.addEventListener("click", function(e) {
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
  });