        feather.replace();
        
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