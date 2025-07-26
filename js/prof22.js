    document.addEventListener('DOMContentLoaded', function() {
        if (typeof feather !== "undefined") {
            feather.replace();
        }
        const menuButton = document.getElementById("menu-button");
        const dropdown = document.getElementById("dropdown");

        if (menuButton && dropdown) {
            menuButton.addEventListener("click", (e) => {
                e.stopPropagation();
                dropdown.classList.toggle("show");
                menuButton.classList.toggle("active");
            });

            document.addEventListener("click", function(event) {
                if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
                    dropdown.classList.remove("show");
                    menuButton.classList.remove("active");
                }
            });
        }

        // Sidebar kiri
        const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
        const sections = document.querySelectorAll('.settings-section');

        if (sidebarLinks.length > 0 && sections.length > 0) {
            sidebarLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    sidebarLinks.forEach(l => l.classList.remove('active'));
                    sections.forEach(section => section.classList.remove('active'));
                    link.classList.add('active');

                   const sectionId = link.getAttribute('data-section') + '-section';
                    const activeSection = document.getElementById(sectionId);
                    if (activeSection) {
                        activeSection.classList.add('active');
                        localStorage.setItem('activeSettingsSection', sectionId);
                    }
                });
            });
            const savedSection = localStorage.getItem('activeSettingsSection');
            if (savedSection) {
                const savedLink = document.querySelector(`.sidebar-menu a[data-section="${savedSection.replace('-section', '')}"]`);
                if (savedLink) {
                    savedLink.click();
                }
            }
        }

        const handleFormSubmit = (formId, successMessage) => {
            const form = document.getElementById(formId);
            if (form) {
                form.addEventListener("submit", function(e) {
                    e.preventDefault();
                    let isValid = true;
                    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
                    
                    requiredInputs.forEach(input => {
                        if (!input.value.trim()) {
                            input.style.borderColor = 'var(--danger-color)';
                            isValid = false;
                        } else {
                            input.style.borderColor = '';
                        }
                    });

                    if (isValid) {
                        alert(successMessage);
                    } else {
                        alert('Please fill in all required fields.');
                    }
                });
            }
        };

        //yu bisa yu
        handleFormSubmit("profile-form", "Profile changes saved successfully.");
        handleFormSubmit("notifications-form", "Notification preferences updated.");
        handleFormSubmit("security-form", "Security settings updated.");
        handleFormSubmit("appearance-form", "Appearance preferences saved.");
        handleFormSubmit("language-form", "Language settings updated.");
        handleFormSubmit("privacy-form", "Privacy preferences saved.");

        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const darkModeStatus = document.getElementById('dark-mode-status');
        
        if (darkModeToggle && darkModeStatus) {
            const savedDarkMode = localStorage.getItem('darkMode') === 'true';
            
            if (savedDarkMode) {
                document.body.classList.add('dark-mode');
                darkModeToggle.checked = true;
                darkModeStatus.textContent = 'Enabled';
            }
            
            // Toggle dark mode
            darkModeToggle.addEventListener('change', function() {
                document.body.classList.toggle('dark-mode');
                const isDarkMode = document.body.classList.contains('dark-mode');
                darkModeStatus.textContent = isDarkMode ? 'Enabled' : 'Disabled';
                
                localStorage.setItem('darkMode', isDarkMode);
            });
        }

        //cara kerja tema
        const themeOptions = document.querySelectorAll('.theme-option');
        if (themeOptions.length > 0) {
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme) {
                document.querySelector(`.theme-option[data-theme="${savedTheme}"]`)?.classList.add('active');
            }
            
            themeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    themeOptions.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    
                    const theme = this.getAttribute('data-theme');
                    localStorage.setItem('theme', theme);
                    //puyeng
                    console.log(`Theme changed to ${theme}`);
                });
            });
        }
        const logoutSection = document.getElementById('logout-section');
        if (logoutSection) {
            const logoutBtn = logoutSection.querySelector('.btn-primary');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (confirm('SERIUS LU NINGGALIN GW? -SULTAN SI DEVELOPER')) {
                        alert('BERHASIL KELUAR');
                        window.location.href = './landing-page.html';
                    }
                });
            }
        }

        const deleteAccountBtn = document.querySelector('.btn-outline i.fa-trash')?.closest('button');
        if (deleteAccountBtn) {
            deleteAccountBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('SERIUS LU NINGGALIN GW? -SULTAN SI DEVELOPER')) {
                    alert('Akun mu telah di hapus HAHA -SULTAN SI DEVELOPER');
                    window.location.href = './landing-page.html';
                }
            });
        }
    });
