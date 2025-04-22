// AOS
// script.js


function validateForm() {
    // Get value from input
    const nama = document.getElementById('nama');
    const email = document.getElementById('email');
    const pesan = document.getElementById('pesan');
    const resultDiv = document.getElementById('validation-result');

    // Reset result div tiap kali submit
    resultDiv.innerHTML = '';
    resultDiv.style.color = 'black';

    // Check validations
    let errors = [];

    if (nama.value.trim() === '') {
        errors.push('Nama harus diisi.');
    }
    if (email.value === '') {
        errors.push('email harus diisi');
    }
    if (pesan.value.trim() === '') {
        errors.push('Pesan tidak boleh kosong.');
    }

    // Tampilkan hasil validasi
    if (errors.length > 0) {
        resultDiv.innerHTML = errors.join('<br>');
    } else {
        resultDiv.innerHTML = `
            <strong>Form berhasil dikirim!</strong><br><br>
            <strong>Nama:</strong> ${nama.value}<br>
            <strong>Email:</strong> ${email.value}<br>
            <strong>Pesan:</strong> ${pesan.value.replace(/\n/g, '<br>')}
        `;
    }
}

// seacrh
const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // supaya gak reload halaman

  const keyword = searchInput.value.toLowerCase();

  books.forEach((book) => {
    const title = book.querySelector(".card-title").textContent.toLowerCase();

    if (title.includes(keyword)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

// Tampilkan tombol saat scroll ke bawah
window.onscroll = function () {
  let btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

