 // Script amélioré avec plus de fonctionnalités
        document.addEventListener('DOMContentLoaded', function() {
            // Mettre à jour l'année dans le footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Gérer la navigation
            const navButtons = document.querySelectorAll('.liens button');
            const pages = document.querySelectorAll('.page');
            const menuToggle = document.querySelector('.menu-toggle');
            const liens = document.querySelector('.liens');
            
            // Toggle menu mobile
            menuToggle.addEventListener('click', function() {
                liens.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-bars');
                this.querySelector('i').classList.toggle('fa-times');
            });
            
            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Désactiver tous les boutons
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Activer le bouton cliqué
                    this.classList.add('active');
                    
                    // Masquer toutes les pages
                    pages.forEach(page => page.classList.remove('visible'));
                    
                    // Afficher la page correspondante
                    const pageClass = this.classList[0];
                    let targetPage;
                    
                    if (pageClass === 'home') {
                        targetPage = document.querySelector('.home_page');
                    } else if (pageClass === 'chambres') {
                        targetPage = document.querySelector('.chambres_body');
                    } else if (pageClass === 'reserv') {
                        targetPage = document.querySelector('.reservations');
                    } else if (pageClass === 'clients') {
                        targetPage = document.querySelector('.client_page');
                    } else if (pageClass === 'paiement') {
                        targetPage = document.querySelector('.paiement_page');
                    } else if (pageClass === 'contacts') {
                        targetPage = document.querySelector('.contact_page');
                    }
                    
                    if (targetPage) {
                        targetPage.classList.add('visible');
                        // Fermer le menu mobile si ouvert
                        if (liens.classList.contains('active')) {
                            liens.classList.remove('active');
                            menuToggle.querySelector('i').classList.add('fa-bars');
                            menuToggle.querySelector('i').classList.remove('fa-times');
                        }
                    }
                });
            });
            
            // Gérer la soumission des formulaires
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const formName = this.id;
                    
                    if (formName === 'reservation-form') {
                        alert('Réservation enregistrée avec succès!');
                    } else if (formName === 'client-form') {
                        alert('Client enregistré avec succès!');
                    } else if (formName === 'paiement-form') {
                        alert('Paiement enregistré avec succès!');
                    } else if (formName === 'contact-form') {
                        alert('Message envoyé avec succès!');
                    }
                    
                    this.reset();
                });
            });
            
            // Animation au défilement
            function checkAnimation() {
                const elements = document.querySelectorAll('.animate');
                elements.forEach(element => {
                    const position = element.getBoundingClientRect();
                    if (position.top < window.innerHeight - 100) {
                        element.classList.add('animated');
                    }
                });
            }
            
            // Header scroll effect
            function headerScroll() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            window.addEventListener('scroll', function() {
                checkAnimation();
                headerScroll();
            });
            
            // Initial check on load
            checkAnimation();
            headerScroll();
        });