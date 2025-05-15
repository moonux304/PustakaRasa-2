// AOS
// script.js



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nama = document.getElementById('name');
      const email = document.getElementById('email');
      const pesan = document.getElementById('message');
      const resultDiv = document.getElementById('validation-result');

      resultDiv.innerHTML = '';
      resultDiv.style.color = 'black';

      let errors = [];

      if (nama.value.trim() === '') {
        errors.push('Name is required.');
      }

      if (email.value.trim() === '') {
        errors.push('Email is required.');
      }

      if (pesan.value.trim() === '') {
        errors.push('Message cannot be empty.');
      }

      if (errors.length > 0) {
        resultDiv.innerHTML = errors.join('<br>');
        resultDiv.style.color = 'red';
      } else {
        resultDiv.innerHTML = `
          <strong>Form submitted successfully!</strong><br><br>
          <strong>Name:</strong> ${nama.value}<br>
          <strong>Email:</strong> ${email.value}<br>
          <strong>Message:</strong> ${pesan.value.replace(/\n/g, '<br>')}
        `;
        resultDiv.style.color = 'black';

        form.reset();
      }
    });
  }
});


// seacrh
document.addEventListener('DOMContentLoaded', () => {
 const titleEl = document.getElementById('modalTitle');
  const authorEl = document.getElementById('modalAuthor');
  const descEl = document.getElementById('modalDesc');
  const imgEl = document.getElementById('modalImg');
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.bookslider-card');
      let found = false;

      cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();

        if (title.includes(query)) {
          const realTitle = card.getAttribute('data-title');
          const author = card.getAttribute('data-author');
          const desc = card.getAttribute('data-desc');
          const img = card.getAttribute('data-img');

          titleEl.innerText = realTitle;
          authorEl.innerText = author;
          descEl.innerText = desc;
          imgEl.src = img;

          // Show modal
          const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
          modal.show();
          found = true;
        }
      });

      if (!found) {
        alert("Buku tidak ditemukan!");
      }
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

/* autosslide
let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('pr_hero_sampul');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);*/

