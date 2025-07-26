

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; 
    }
    showSlide(currentSlide);
}


setInterval(() => {
    changeSlide(1);
}, 5000);

showSlide(currentSlide);




  document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    const menuButton = document.getElementById('menu-button');
    const dropdown = document.getElementById('dropdown');
    
    menuButton.addEventListener('click', function() {
      dropdown.classList.toggle('show');
    });
    

    document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  });

function goToPembayaran(nama, harga, gambar) {
    window.location.href = `pesan.html?nama=${encodeURIComponent(nama)}&harga=${harga}&gambar=${encodeURIComponent(gambar)}`;
}
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    const params = new URLSearchParams(window.location.search);
    const nama = params.get('nama');
    const harga = params.get('harga');
    const gambar = params.get('gambar');

    document.getElementById('nama-menu').textContent = nama;
    document.getElementById('harga-menu').textContent = harga;
    
    if (gambar) {
      document.getElementById('menu-image').src = gambar;
    }
    
    localStorage.setItem('namaMenu', nama);
    localStorage.setItem('hargaMenu', harga);
    if (gambar) {
      localStorage.setItem('gambarMenu', gambar);
    }
});
document.addEventListener('DOMContentLoaded', function() {
      feather.replace();
      
      const modalOverlay = document.getElementById('modalOverlay');
      const modalFoodTitle = document.getElementById('modalFoodTitle');
      const modalFoodPrice = document.getElementById('modalFoodPrice');
      const modalFoodImage = document.getElementById('modalFoodImage');
      const modalCloseBtn = document.getElementById('modalCloseBtn');
      const orderNowBtn = document.getElementById('orderNowBtn');
      const addToCartBtn = document.getElementById('addToCartBtn');
      
      
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        card.addEventListener('click', function() {
          const title = this.querySelector('h3').textContent;
          const price = this.querySelector('.harga').textContent;
          const imageSrc = this.querySelector('img').src;
          const rating = this.querySelector('p:not(.harga)')?.textContent || '';
          
          
          modalFoodTitle.textContent = title;
          modalFoodPrice.textContent = price;
          modalFoodImage.src = imageSrc;
          modalFoodImage.alt = title;
          
          
          modalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
          
          modalOverlay.dataset.title = title;
          modalOverlay.dataset.price = price.replace(/\D/g, '');
          modalOverlay.dataset.image = imageSrc;
          
          feather.replace();
        });
      });
      
      
      modalCloseBtn.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
      orderNowBtn.addEventListener('click', function() {
        const title = modalOverlay.dataset.title;
        const price = modalOverlay.dataset.price;
        const image = modalOverlay.dataset.image;
        window.location.href = `pesan.html?nama=${encodeURIComponent(title)}&harga=${price}&gambar=${encodeURIComponent(image)}`;
      });
      addToCartBtn.addEventListener('click', function() {
        alert('Item ditambahkan ke keranjang!');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
      const optionButtons = document.querySelectorAll('.option-btn');
      optionButtons.forEach(button => {
        button.addEventListener('click', function() {
          optionButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        });
      });
      let currentSlide = 0;
      const slides = document.querySelectorAll('.slide');
      function showSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.remove('active');
              if (i === index) {
                  slide.classList.add('active');
              }
          });}
      function changeSlide(direction) {
          currentSlide += direction;
          if (currentSlide < 0) {
              currentSlide = slides.length - 1;
          } else if (currentSlide >= slides.length) {
              currentSlide = 0;
          }
          showSlide(currentSlide);}
      setInterval(() => {
          changeSlide(1);
      }, 5000);
      showSlide(currentSlide);
      const searchBox = document.getElementById('search-box');
      searchBox.addEventListener('input', function() {
          const searchTerm = this.value.toLowerCase();
          cards.forEach(card => {
              const foodName = card.querySelector('h3').textContent.toLowerCase();
              if (foodName.includes(searchTerm)) {
                  card.style.display = 'block'; 
              } else {
                  card.style.display = 'none'; 
              }
          });
      });
    });

orderNowBtn.addEventListener('click', function() {
  const title = modal.dataset.title;
  const price = modal.dataset.price;
  const image = modal.dataset.image;
  window.location.href = `pesan.html?nama=${encodeURIComponent(title)}&harga=${price}&gambar=${encodeURIComponent(image)}`;
  closeModalFunc();
});

addToCartBtn.addEventListener('click', function() {
  alert('Item ditambahkan ke keranjang!');
  closeModalFunc();
});




function goToPembayaran(nama, harga, gambar) {
  
  return false;
}
