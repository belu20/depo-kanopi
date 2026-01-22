// load
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
//aktifkan toggle
const navBar = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navBar.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const humburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navBar.contains(e.target)) {
    navBar.classList.remove("active");
  }
});

// Data foto (ganti dengan URL foto Anda)
const photos = [
  { src: "assets/images/kanopi-kain-1.webp", caption: "Kanopi Kain" },
  { src: "assets/images/tenda-membran-3.webp", caption: "Tenda Membrane" },
  { src: "assets/images/kanopi-kain-2.webp", caption: "Tenda Kain" },
  { src: "assets/images/tenda-membrane.webp", caption: "Kanopi Membrane" },
  {
    src: "assets/images/tenda-membran.webp",
    caption: "Kanopi Membrane",
  },
  { src: "assets/images/kanopi-kain.webp", caption: "Awning" },
  { src: "assets/images/canopi-3.webp", caption: "Kanopi Membrane" },
  { src: "assets/images/canopi-4.webp", caption: "Awning" },
  { src: "assets/images/canopi-5.webp", caption: "Kanopi Kain" },
  { src: "assets/images/canopi4.webp", caption: "Kanopi Membrane" },
  { src: "assets/images/canopi-6.webp", caption: "Kanopi Kain" },
  { src: "assets/images/canopi-1.webp", caption: "Kanopi Kain" },
  { src: "assets/images/canopi-2.webp", caption: "Kanopi Kain" },
  { src: "assets/images/awning-gulung.webp", caption: "Awning" },
];

let currentIndex = 0;
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

// Buat gallery
photos.forEach((photo, index) => {
  const item = document.createElement("div");
  item.className = "photo-item";
  item.onclick = () => openModal(index);

  item.innerHTML = `
                <img src="${photo.src}" alt="${photo.caption}">
                <div class="zoom-icon">🔍</div>
                <div class="photo-caption">${photo.caption}</div>
            `;

  gallery.appendChild(item);
});

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = photos[index].src;
  captionText.textContent = photos[index].caption;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex >= photos.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = photos.length - 1;
  }

  modalImg.src = photos[currentIndex].src;
  captionText.textContent = photos[currentIndex].caption;
}

// Tutup modal saat klik di luar gambar
modal.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Keyboard navigation
document.addEventListener("keydown", function (event) {
  if (modal.style.display === "block") {
    if (event.key === "ArrowLeft") changeImage(-1);
    if (event.key === "ArrowRight") changeImage(1);
    if (event.key === "Escape") closeModal();
  }
});

// function list dropdown
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains("active");

    // Close all other answers
    questions.forEach((q) => {
      q.classList.remove("active");
      q.nextElementSibling.classList.remove("active");
    });

    // Toggle current answer
    if (!isActive) {
      question.classList.add("active");
      answer.classList.add("active");
    }
  });
});
