// Banner Slider
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
        currentSlide = slides.length - 1; // Loop to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop to first slide
    }
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Show the first slide initially
showSlide(currentSlide);

// Fitur Pencarian
const searchBox = document.getElementById('search-box');
const cards = document.querySelectorAll('.card');

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

  // Initialize Feather Icons
  document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Dropdown toggle functionality
    const menuButton = document.getElementById('menu-button');
    const dropdown = document.getElementById('dropdown');
    
    menuButton.addEventListener('click', function() {
      dropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  });

function goToPembayaran(nama, harga, gambar) {
    window.location.href = `pesasn-nolog.html?nama=${encodeURIComponent(nama)}&harga=${harga}&gambar=${encodeURIComponent(gambar)}`;
}
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    const params = new URLSearchParams(window.location.search);
    const nama = params.get('nama');
    const harga = params.get('harga');
    const gambar = params.get('gambar'); // This gets the image path

    // Tampilkan data menu
    document.getElementById('nama-menu').textContent = nama;
    document.getElementById('harga-menu').textContent = harga;
    
    // Tampilkan gambar menu jika ada
    if (gambar) {
      document.getElementById('menu-image').src = gambar;
    }
    
    // Simpan di localStorage
    localStorage.setItem('namaMenu', nama);
    localStorage.setItem('hargaMenu', harga);
    if (gambar) {
      localStorage.setItem('gambarMenu', gambar);
    }
});
document.addEventListener('DOMContentLoaded', function() {
      feather.replace();
      
      // Initialize variables
      const modalOverlay = document.getElementById('modalOverlay');
      const modalFoodTitle = document.getElementById('modalFoodTitle');
      const modalFoodPrice = document.getElementById('modalFoodPrice');
      const modalFoodImage = document.getElementById('modalFoodImage');
      const modalCloseBtn = document.getElementById('modalCloseBtn');
      const orderNowBtn = document.getElementById('orderNowBtn');
      const addToCartBtn = document.getElementById('addToCartBtn');
      
      // Get all card elements
      const cards = document.querySelectorAll('.card');
      
      // Add click event to each card
      cards.forEach(card => {
        card.addEventListener('click', function() {
          // Get data from the clicked card
          const title = this.querySelector('h3').textContent;
          const price = this.querySelector('.harga').textContent;
          const imageSrc = this.querySelector('img').src;
          const rating = this.querySelector('p:not(.harga)')?.textContent || '';
          
          // Set modal content
          modalFoodTitle.textContent = title;
          modalFoodPrice.textContent = price;
          modalFoodImage.src = imageSrc;
          modalFoodImage.alt = title;
          
          // Show modal
          modalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
          
          // Store current item data in modal dataset for later use
          modalOverlay.dataset.title = title;
          modalOverlay.dataset.price = price.replace(/\D/g, '');
          modalOverlay.dataset.image = imageSrc;
          
          // Replace feather icons (in case they were added dynamically)
          feather.replace();
        });
      });
      
      // Close modal
      modalCloseBtn.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
      
      // Close modal when clicking outside
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
      
      // Order Now button
      orderNowBtn.addEventListener('click', function() {
        const title = modalOverlay.dataset.title;
        const price = modalOverlay.dataset.price;
        const image = modalOverlay.dataset.image;
        window.location.href = `pesasn-nolog.html?nama=${encodeURIComponent(title)}&harga=${price}&gambar=${encodeURIComponent(image)}`;
      });
      
      // Add to Cart button
      addToCartBtn.addEventListener('click', function() {
        alert('Item ditambahkan ke keranjang!');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
      
      // Option buttons functionality
      const optionButtons = document.querySelectorAll('.option-btn');
      optionButtons.forEach(button => {
        button.addEventListener('click', function() {
          optionButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        });
      });
      
      // Banner Slider
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
      
      // Auto slide every 5 seconds
      setInterval(() => {
          changeSlide(1);
      }, 5000);
      
      // Show the first slide initially
      showSlide(currentSlide);
      
      // Search functionality
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
      
      document.addEventListener('DOMContentLoaded', function() {
  const closeRec = document.querySelector('.close-recommendation');
  const loginRec = document.querySelector('.login-recommendation');
  
  if (closeRec && loginRec) {
    closeRec.addEventListener('click', function() {
      loginRec.style.display = 'none';
      document.querySelector('.buat-mesan').style.marginTop = '0';
    });
  }
});
 document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
  });
      // Login recommendation close button
      const closeRec = document.querySelector('.close-recommendation');
      const loginRec = document.querySelector('.login-recommendation');
      
      if (closeRec && loginRec) {
        closeRec.addEventListener('click', function() {
          loginRec.style.display = 'none';
          document.querySelector('.buat-mesan').style.marginTop = '0';
        });
      }
    });


function goToPembayaran(nama, harga, gambar) {
  
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  const closeRec = document.querySelector('.close-recommendation');
  const loginRec = document.querySelector('.login-recommendation');
  
  if (closeRec && loginRec) {
    closeRec.addEventListener('click', function() {
      loginRec.style.display = 'none';
      document.querySelector('.buat-mesan').style.marginTop = '0';
    });
  }
});
 document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
  });
