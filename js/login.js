      document.addEventListener('DOMContentLoaded', function() {
        feather.replace();
        
        document.querySelectorAll('.toggle-password').forEach(button => {
          button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            if (input.type === 'password') {
              input.type = 'text';
              icon.setAttribute('data-feather', 'eye-off');
            } else {
              input.type = 'password';
              icon.setAttribute('data-feather', 'eye');
            }
            feather.replace();
          });
        });
        
        document.querySelectorAll('.floating input').forEach(input => {
          input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('active');
          });
          
          input.addEventListener('blur', () => {
            if (!input.value) {
              input.previousElementSibling.classList.remove('active');
            }
          });
          
          if (input.value) {
            input.previousElementSibling.classList.add('active');
          }
        });
        
        document.getElementById('loginForm').addEventListener('submit', function(e) {
          e.preventDefault();
          const username = document.getElementById('username').value.trim();
          window.location.href = 'dashboard-sund_res.html';
        });
        
        document.querySelectorAll('.social-btn').forEach(button => {
          button.addEventListener('click', function() {
            const platform = this.classList.contains('google') ? 'Google' : 'Facebook';
            alert(`Anda akan diarahkan ke login ${platform}`);
          });
        });
        
        const menuButton = document.getElementById('menu-button');
        const dropdown = document.getElementById('dropdown');
        
        if (menuButton && dropdown) {
          menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('show');
          });
          
          document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !dropdown.contains(e.target)) {
              dropdown.classList.remove('show');
            }
          });
        }
      });