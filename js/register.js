document.addEventListener('DOMContentLoaded', function() {
      feather.replace();
      
      const form = document.getElementById('RegisForm');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmPassword');
      const passwordStrengthBars = document.querySelectorAll('.strength-bar');
      const strengthText = document.querySelector('.strength-text');
      
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
      

      passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        

        if (password.length >= 8) strength++;

        if (/[a-z]/.test(password)) strength++;

        if (/[A-Z]/.test(password)) strength++;

        if (/[0-9]/.test(password)) strength++;

        if (/[^a-zA-Z0-9]/.test(password)) strength++;
        

        passwordStrengthBars.forEach((bar, index) => {
          bar.style.backgroundColor = index < strength ? getStrengthColor(strength) : '#e0e0e0';
        });
        
        const strengthMessages = ['Sangat Lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat Kuat'];
        strengthText.textContent = strengthMessages[Math.min(strength, 4) - 1] || '';
        strengthText.style.color = getStrengthColor(strength);
      });
      
      function getStrengthColor(strength) {
        const colors = ['#ff5e5e', '#ff8e8e', '#ffcc5e', '#5ec8ff', '#5eff8e'];
        return colors[Math.min(strength, 4) - 1] || '#e0e0e0';
      }
      

      form.addEventListener('input', function(e) {
        validateField(e.target);
      });
      

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const fields = [
          'username', 'phone', 'email', 
          'password', 'confirmPassword', 'terms'
        ];
        
        fields.forEach(fieldId => {
          const field = document.getElementById(fieldId);
          if (!validateField(field)) {
            isValid = false;
          }
        });
        
        if (isValid) {
          const originalButtonText = document.querySelector('.register-btn span').textContent;
          const button = document.querySelector('.register-btn');
          button.innerHTML = '<i data-feather="check"></i><span>Pendaftaran Berhasil!</span>';
          feather.replace();
          

          setTimeout(() => {
            window.location.href = 'dashboard-sund_res.html';
          }, 1500);
        }
      });
      
      function validateField(field) {
        const errorElement = document.getElementById(`${field.id}-error`);
        if (!errorElement) return true;
        
        errorElement.textContent = '';
        field.classList.remove('error');
        
        if (field.required && !field.value.trim()) {
          showError(field, errorElement, 'Field ini wajib diisi');
          return false;
        }
        
        if (field.id === 'username') {
          if (field.value.length < 4 || field.value.length > 20) {
            showError(field, errorElement, 'Username harus 4-20 karakter');
            return false;
          }
          if (!/^[a-zA-Z0-9]+$/.test(field.value)) {
            showError(field, errorElement, 'Hanya huruf dan angka yang diperbolehkan');
            return false;
          }
        }
        
        if (field.id === 'phone') {
          if (!/^[0-9]{10,13}$/.test(field.value)) {
            showError(field, errorElement, 'Nomor telepon harus 10-13 digit angka');
            return false;
          }
        }
        
        if (field.id === 'email') {
          if (!/^[^@]+@[^@]+\.[^@]+$/.test(field.value)) {
            showError(field, errorElement, 'Email tidak valid');
            return false;
          }
          if (!field.value.endsWith('@gmail.com')) {
            showError(field, errorElement, 'Harus menggunakan @gmail.com');
            return false;
          }
        }
        
        if (field.id === 'password') {
          if (field.value.length < 8) {
            showError(field, errorElement, 'Password minimal 8 karakter');
            return false;
          }
          if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(field.value)) {
            showError(field, errorElement, 'Harus mengandung huruf besar, kecil, dan angka');
            return false;
          }
        }
        
        if (field.id === 'confirmPassword') {
          if (field.value !== passwordInput.value) {
            showError(field, errorElement, 'Password tidak cocok');
            return false;
          }
        }
        
        if (field.id === 'terms' && !field.checked) {
          showError(field, errorElement, 'Anda harus menyetujui syarat dan ketentuan');
          return false;
        }
        
        return true;
      }
      
      function showError(field, errorElement, message) {
        errorElement.textContent = message;
        field.classList.add('error');
        field.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
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