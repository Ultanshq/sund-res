document.addEventListener('DOMContentLoaded', function() {
      feather.replace();
      

        feather.replace();
        
        const menuButton = document.getElementById('menu-button');
        const dropdown = document.getElementById('dropdown');
        
        if (menuButton && dropdown) {
          menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('show');
          });
          
          // Close dropdown when clicking outside
          document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !dropdown.contains(e.target)) {
              dropdown.classList.remove('show');
            }
          });
        }
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
        const title = modal.dataset.title;
        const price = modal.dataset.price;
        const image = modal.dataset.image;
        window.location.href = `pesan.html?nama=${encodeURIComponent(title)}&harga=${price}&gambar=${encodeURIComponent(image)}`;
        closeModalFunc();
      });

      // Add to Cart button
      addToCartBtn.addEventListener('click', function() {
        alert('Item ditambahkan ke keranjang!');
        closeModalFunc();
      });

      // Initialize feather icons when modal is shown
      modal.addEventListener('shown.bs.modal', function() {
        feather.replace();
      });
    });

    function goToPembayaran(nama, harga, gambar) {
      window.location.href = `pesan.html?nama=${encodeURIComponent(nama)}&harga=${harga}&gambar=${encodeURIComponent(gambar)}`;
      return false;
    }