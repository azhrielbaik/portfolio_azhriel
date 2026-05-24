/* ── Portfolio tabs ── */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;

    // 1. Reset/hapus status aktif dari semua tombol dan panel
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-panel")
      .forEach((p) => p.classList.remove("active"));

    // 2. Tambahkan status aktif ke tombol dan panel yang sedang diklik
    btn.classList.add("active");
    const activePanel = document.getElementById("tab-" + tab);
    activePanel.classList.add("active");

    // 3. FIX: Paksa munculkan elemen 'fade-in' dengan sedikit jeda (50 milidetik)
    // agar browser sempat merender display: block terlebih dahulu
    setTimeout(() => {
      activePanel.querySelectorAll(".fade-in").forEach((el) => {
        el.classList.add("visible");
      });
    }, 50);

    // 4. Jalankan animasi progress bar jika tab skills aktif
    if (tab === "skills") {
      setTimeout(animateBars, 100);
    }
  });
});

/* ── Skill bar animation ── */
function animateBars() {
  document.querySelectorAll(".bar-fill").forEach((bar) => {
    bar.style.width = bar.dataset.width + "%";
  });
}

/* ============================================================
   MODAL SERTIFIKAT LOGIC
============================================================ */
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeModalBtn = document.querySelector(".close-modal");

// Saat kartu sertifikat diklik
document.querySelectorAll(".cert-clickable").forEach((card) => {
  card.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-img");
    captionText.innerHTML = this.getAttribute("data-title");

    // Matikan scroll web di background
    document.body.style.overflow = "hidden";
  });
});

// Saat tombol X diklik
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Tutup otomatis kalau klik layar di luar gambar
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
