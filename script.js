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
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Optional: biar tombol "cari" gak reload halaman
  document.querySelector("form[role='search']").addEventListener("submit", function (e) {
    e.preventDefault();
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

// bookmark
document.addEventListener('DOMContentLoaded', function() {
  const bookmarkIcons = document.querySelectorAll('.bookmark-icon');
  
  // Mengambil data bookmark yang sudah disimpan sebelumnya (dari localStorage)
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  // Menandai tombol bookmark yang sudah dibookmark sebelumnya
  bookmarkIcons.forEach(icon => {
      const novelId = icon.getAttribute('data-id');
      
      if (bookmarks.includes(novelId)) {
          icon.textContent = 'bookmark_added';  // Ubah ikon menjadi yang sudah dibookmark
      }
  });

  // Menambahkan event listener untuk setiap tombol bookmark
  bookmarkIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          const novelId = icon.getAttribute('data-id');
          
          if (bookmarks.includes(novelId)) {
              // Jika sudah dibookmark, hapus dari daftar bookmark
              bookmarks = bookmarks.filter(id => id !== novelId);
              icon.textContent = 'bookmark';  // Ubah ikon kembali ke bookmark kosong
          } else {
              // Jika belum dibookmark, tambahkan ke daftar bookmark
              bookmarks.push(novelId);
              icon.textContent = 'bookmark_added';  // Ubah ikon menjadi yang sudah dibookmark
          }

          // Simpan daftar bookmark terbaru ke localStorage
          localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      });
  });
});

