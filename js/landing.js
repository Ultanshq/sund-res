document.addEventListener('DOMContentLoaded', function() {
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

  const modal = document.getElementById('comment-modal');
  const openBtn = document.getElementById('open-comment');
  const closeBtn = document.getElementById('close-comment');
  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('existing-comments');

  if (modal && openBtn && closeBtn) {
    function createCommentElement(name, comment) {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment-card';
      commentElement.innerHTML = `
        <h4>${name}</h4>
        <p>"${comment}"</p>
      `;
      return commentElement;
    }

    openBtn.addEventListener('click', function() {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    if (commentForm && commentsContainer) {
      commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        
        if (name && comment) {
          const newComment = createCommentElement(name, comment);
          
          commentsContainer.prepend(newComment);
          
          commentForm.reset();
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
          
          alert('Komentar Anda telah ditambahkan!');
        } else {
          alert('Harap isi semua field!');
        }
      });
    }
  }

 
  const closeRec = document.querySelector('.close-recommendation');
  const loginRec = document.querySelector('.login-recommendation');
  
  if (closeRec && loginRec) {
    closeRec.addEventListener('click', function() {
      loginRec.style.display = 'none';
      document.querySelector('.buat-mesan').style.marginTop = '0';
    });
  }
});