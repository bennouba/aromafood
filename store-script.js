const products = [
    {
        id: 1,
        name: 'قهوة موفينبيك كريما - 10 كبسولات',
        category: 'coffee',
        price: 20.00,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 45,
        badge: 'جديد',
        badgeClass: 'new',
        description: 'قهوة موفينبيك كريما بجودة عالية'
    },
    {
        id: 2,
        name: 'السكر الأبيض - 1 كغ',
        category: 'sugar',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1599599810998-c87b8b9b56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 32,
        badge: 'الأكثر مبيعاً',
        badgeClass: 'sale',
        description: 'سكر أبيض نقي من الدرجة الأولى'
    },
    {
        id: 3,
        name: 'سكر براون - 1 كغ',
        category: 'sugar',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1563255503-c1d0dba0eca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 28,
        badge: null,
        description: 'سكر براون فاخر بطعم غني'
    },
    {
        id: 4,
        name: 'حبوب القهوة المختارة - 1 كغ',
        category: 'coffee',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de56e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 67,
        badge: 'خاص',
        badgeClass: 'new',
        description: 'أفضل حبوب قهوة مختارة بعناية'
    },
    {
        id: 5,
        name: 'قهوة مطحونة ناعمة - 400 جرام',
        category: 'coffee',
        price: 38.00,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 4,
        reviews: 39,
        badge: null,
        description: 'قهوة مطحونة طازجة وجاهزة للاستخدام'
    },
    {
        id: 6,
        name: 'مجموعة مستلزمات القهوة',
        category: 'accessories',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1517271048169-0feb91c13b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 54,
        badge: null,
        description: 'كل ما تحتاجه لتحضير قهوة احترافية'
    },
    {
        id: 7,
        name: 'مجموعة السكريات المتنوعة',
        category: 'sugar',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1562884353-63dfe82b42de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 4,
        reviews: 21,
        badge: null,
        description: 'مزيج من السكريات البيضاء والبنية والملونة'
    },
    {
        id: 8,
        name: 'قهوة عطرية فاخرة - 250 جرام',
        category: 'coffee',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 48,
        badge: null,
        description: 'قهوة مع نكهات عطرية فاخرة'
    },
    {
        id: 9,
        name: 'أدوات تحضير القهوة المحترفة',
        category: 'accessories',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 35,
        badge: 'جديد',
        badgeClass: 'new',
        description: 'مجموعة متكاملة من أدوات القهوة الاحترافية'
    },
    {
        id: 10,
        name: 'قهوة سريعة الذوبان الفاخرة',
        category: 'coffee',
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1559056199-750f2c38597d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 4,
        reviews: 22,
        badge: null,
        description: 'قهوة سهلة التحضير بجودة عالية'
    },
    {
        id: 11,
        name: 'كوب القهوة الذكي - معزول حراري',
        category: 'accessories',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1521841776224-e2a00f3e7f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 5,
        reviews: 41,
        badge: null,
        description: 'كوب ذكي يحافظ على درجة الحرارة'
    },
    {
        id: 12,
        name: 'سكر ملون - مجموعة متنوعة',
        category: 'sugar',
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1563255503-c1d0dba0eca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=85',
        rating: 4,
        reviews: 18,
        badge: null,
        description: 'سكر ملون وجميل لتزيين المشروبات'
    }
];

let currentCategory = 'all';
let cartCount = 0;

function renderProducts(category = 'all', searchTerm = '') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.includes(searchTerm) ||
            p.description.includes(searchTerm)
        );
    }

    filteredProducts.forEach(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        const badge = product.badge ? `<span class="product-badge ${product.badgeClass}">${product.badge}</span>` : '';

        const productHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${badge}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${stars}</span>
                        <span class="reviews-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">${product.price.toFixed(2)} د.ل</div>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">أضف إلى السلة</button>
                </div>
            </div>
        `;

        grid.innerHTML += productHTML;
    });
}

function filterByCategory(category) {
    currentCategory = category;
    const searchTerm = document.getElementById('searchInput').value;
    renderProducts(category, searchTerm);
}

function addToCart(productName, price) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;

    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✓ تم الإضافة';
    button.classList.add('added');

    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('added');
    }, 2000);

    console.log(`تم إضافة: ${productName} - السعر: ${price} د.ل`);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    const performSearch = () => {
        const searchTerm = searchInput.value.trim();
        renderProducts(currentCategory, searchTerm);
    };

    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .category-item').forEach(el => {
        observer.observe(el);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupSearch();
    setupScrollAnimation();
    setupSmoothScroll();

    document.querySelector('.hero-btn').addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    const year = new Date().getFullYear();
    document.querySelectorAll('.footer').forEach(footer => {
        footer.innerHTML = footer.innerHTML.replace(/\d{4}/, year.toString());
    });
});
