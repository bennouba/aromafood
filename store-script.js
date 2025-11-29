document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add to cart button functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Show success message
            const originalText = this.textContent;
            this.textContent = '✓ تم الإضافة إلى السلة';
            this.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            this.style.borderColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.style.borderColor = '';
            }, 2000);

            console.log(`تم إضافة: ${productName} - السعر: ${productPrice}`);
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .category-card, .contact-card').forEach(el => {
        observer.observe(el);
    });

    // Add fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Update year in footer
    const year = new Date().getFullYear();
    document.querySelectorAll('.footer').forEach(footer => {
        footer.innerHTML = footer.innerHTML.replace(/\d{4}/g, year.toString());
    });
});

// Currency formatter for Libyan Dinar
function formatLD(price) {
    return new Intl.NumberFormat('ar-LY', {
        style: 'currency',
        currency: 'LYD'
    }).format(price);
}