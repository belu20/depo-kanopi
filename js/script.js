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
  { src: "./assets/images/kanopi-kain-1.jpeg", caption: "Kanopi Kain" },
  { src: "./assets/images/tenda-membran-3.jpeg", caption: "Tenda Membrane" },
  { src: "./assets/images/kanopi-kain-2.jpeg", caption: "Tenda Kain" },
  { src: "./assets/images/tenda-membrane.jpeg", caption: "Kanopi Membrane" },
  {
    src: "./assets/images/tenda-membran.jpeg",
    caption: "Kanopi Membrane",
  },
  { src: "./assets/images/kanopi-kain.jpeg", caption: "Kanopi Kain" },
  { src: "./assets/images/canopi-3.jpeg", caption: "Kanopi Membrane" },
  { src: "./assets/images/canopi-4.jpeg", caption: "Kanopi Kain" },
  { src: "./assets/images/canopi-5.jpeg", caption: "Kanopi Kain" },
  { src: "./assets/images/canopi4.jpeg", caption: "Kanopi Membrane" },
  { src: "./assets/images/canopi-6.jpeg", caption: "Kanopi Kain" },
  { src: "./assets/images/canopi-1.jpeg", caption: "Kanopi Permanen" },
  { src: "./assets/images/canopi-2.jpeg", caption: "Kanopi Permanen" },
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
