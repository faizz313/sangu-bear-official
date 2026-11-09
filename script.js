
// =================================
// MENU HAMBURGER
// =================================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navigation.classList.toggle("show");
});

// Tutup menu setelah link dipilih
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("active");
    navigation.classList.remove("show");
  });
});


// =================================
// ANIMASI KETIKAN KOMPUTER
// =================================

const title = document.querySelector(".typing-title");
const subtitle = document.getElementById("subtitle");

const titleText = title.dataset.text;
const subtitleText = subtitle.textContent.trim();

title.textContent = "";
subtitle.textContent = "";

let titleIndex = 0;
let subtitleIndex = 0;

function typeTitle() {
  if (titleIndex < titleText.length) {
    title.textContent += titleText.charAt(titleIndex);
    titleIndex++;

    setTimeout(typeTitle, 65);
  } else {
    setTimeout(typeSubtitle, 500);
  }
}

function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    subtitle.textContent += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;

    setTimeout(typeSubtitle, 40);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeTitle, 600);
});


// =================================
// GALERI FOTO / LIGHTBOX
// =================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const photo = item.dataset.photo;

    lightboxImage.src = photo;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closePhoto() {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

closeLightbox.addEventListener("click", closePhoto);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closePhoto();
  }
});

// Tutup foto dengan tombol kembali Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePhoto();
  }
});
