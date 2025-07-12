// Product data
const products = [
    // Classic PopSockets
    {
        id: 1,
        name: "Classic Black PopSocket",
        description: "The original PopSocket in sleek black. Perfect for any phone.",
        price: 14.99,
        image: "classic-black",
        type: "classic",
        phoneCompatibility: ["iphone", "samsung", "google", "oneplus", "other"],
        imageUrl: "https://images.unsplash.com/photo-1603314585442-ee3f5b80cdc7?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 2,
        name: "Rainbow Gradient PopSocket",
        description: "Vibrant rainbow gradient design that stands out from the crowd.",
        price: 16.99,
        image: "rainbow-gradient",
        type: "classic",
        phoneCompatibility: ["iphone", "samsung", "google", "oneplus", "other"],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 3,
        name: "Marble Pattern PopSocket",
        description: "Elegant marble pattern for a sophisticated look.",
        price: 18.99,
        image: "marble-pattern",
        type: "classic",
        phoneCompatibility: ["iphone", "samsung", "google", "oneplus", "other"],
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 4,
        name: "Glitter Gold PopSocket",
        description: "Sparkling gold glitter design for maximum glamour.",
        price: 19.99,
        image: "glitter-gold",
        type: "classic",
        phoneCompatibility: ["iphone", "samsung", "google", "oneplus", "other"],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 5,
        name: "Clear Transparent PopSocket",
        description: "Invisible grip that doesn't interfere with your phone's design.",
        price: 15.99,
        image: "clear-transparent",
        type: "classic",
        phoneCompatibility: ["iphone", "samsung", "google", "oneplus", "other"],
        imageUrl: "https://images.unsplash.com/photo-1603314585442-ee3f5b80cdc7?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 6,
        name: "Neon Pink PopSocket",
        description: "Bold neon pink for those who love to make a statement.",
        price: 17.99,
        image: "neon-pink",
        type: "classic",
        phoneCompatibility: ["iphone", "samsung", "google", "oneplus", "other"],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
    },
    
    // MagSafe PopSockets
    {
        id: 7,
        name: "MagSafe Black PopSocket",
        description: "MagSafe compatible grip for iPhone 12 and newer. Magnetic attachment.",
        price: 24.99,
        image: "magsafe-black",
        type: "magsafe",
        phoneCompatibility: ["iphone"],
        imageUrl: "https://images.unsplash.com/photo-1603314585442-ee3f5b80cdc7?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 8,
        name: "MagSafe Clear PopSocket",
        description: "Transparent MagSafe grip that shows off your phone's design.",
        price: 26.99,
        image: "magsafe-clear",
        type: "magsafe",
        phoneCompatibility: ["iphone"],
        imageUrl: "https://images.unsplash.com/photo-1603314585442-ee3f5b80cdc7?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 9,
        name: "MagSafe Rainbow PopSocket",
        description: "Vibrant rainbow MagSafe grip with magnetic attachment.",
        price: 28.99,
        image: "magsafe-rainbow",
        type: "magsafe",
        phoneCompatibility: ["iphone"],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 10,
        name: "MagSafe Gold PopSocket",
        description: "Premium gold MagSafe grip for iPhone users.",
        price: 29.99,
        image: "magsafe-gold",
        type: "magsafe",
        phoneCompatibility: ["iphone"],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 11,
        name: "MagSafe Marble PopSocket",
        description: "Elegant marble pattern MagSafe grip with magnetic attachment.",
        price: 27.99,
        image: "magsafe-marble",
        type: "magsafe",
        phoneCompatibility: ["iphone"],
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 12,
        name: "MagSafe Glitter PopSocket",
        description: "Sparkling glitter MagSafe grip for maximum style.",
        price: 30.99,
        image: "magsafe-glitter",
        type: "magsafe",
        phoneCompatibility: ["iphone"],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
    }
];

// Cart functionality
let cart = [];

// DOM elements
const productGrid = document.getElementById('product-grid');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    setupSmoothScrolling();
});

// Load products into the grid
function loadProducts(filteredProducts = null) {
    productGrid.innerHTML = '';
    
    const productsToShow = filteredProducts || products;
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.name}" onerror="this.style.display='none'">
                <div class="product-badge ${product.type === 'magsafe' ? 'magsafe-badge' : ''}">
                    ${product.type === 'magsafe' ? '<i class="fas fa-magnet"></i> MagSafe' : 'Classic'}
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-compatibility">
                    <small>Compatible with: ${getCompatibilityText(product.phoneCompatibility)}</small>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Get compatibility text
function getCompatibilityText(compatibility) {
    const compatibilityMap = {
        'iphone': 'iPhone',
        'samsung': 'Samsung',
        'google': 'Google Pixel',
        'oneplus': 'OnePlus',
        'other': 'Other Android'
    };
    
    if (compatibility.includes('iphone') && compatibility.includes('samsung') && compatibility.includes('google') && compatibility.includes('oneplus') && compatibility.includes('other')) {
        return 'All Phones';
    }
    
    return compatibility.map(phone => compatibilityMap[phone]).join(', ');
}

// Filter products function
function filterProducts() {
    const phoneFilter = document.getElementById('phone-filter').value;
    const gripFilter = document.getElementById('grip-filter').value;
    
    let filteredProducts = products;
    
    // Filter by phone type
    if (phoneFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.phoneCompatibility.includes(phoneFilter)
        );
    }
    
    // Filter by grip type
    if (gripFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.type === gripFilter
        );
    }
    
    loadProducts(filteredProducts);
}

// Get product color based on image name
function getProductColor(imageName) {
    const colors = {
        'classic-black': '#1f2937',
        'rainbow-gradient': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3)',
        'marble-pattern': 'linear-gradient(45deg, #f8f9fa, #e9ecef, #dee2e6)',
        'glitter-gold': 'linear-gradient(45deg, #ffd700, #ffed4e, #fff200)',
        'clear-transparent': 'rgba(255, 255, 255, 0.3)',
        'neon-pink': '#ff69b4'
    };
    return colors[imageName] || '#6366f1';
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartDisplay();
    showNotification('Product added to cart!');
}

// Update cart display
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div>
                <button onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showNotification('Product removed from cart!');
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order! Total: $${total.toFixed(2)}\n\nThis is a demo website. In a real application, this would redirect to a payment processor.`);
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    closeModalFunc();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Setup event listeners
function setupEventListeners() {
    // Cart modal
    document.querySelector('.cart-icon').addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'block';
    });

    closeModal.addEventListener('click', closeModalFunc);
    
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeModalFunc();
        }
    });

    // Mobile navigation
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Contact form
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Close modal function
function closeModalFunc() {
    cartModal.style.display = 'none';
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
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
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Product search functionality (for future enhancement)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    // Update product grid with filtered results
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        // Same product card creation logic as loadProducts()
    });
}

// Add to wishlist functionality (for future enhancement)
function addToWishlist(productId) {
    showNotification('Product added to wishlist!');
}

// Product quick view functionality (for future enhancement)
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Quick View: ${product.name}\nPrice: $${product.price.toFixed(2)}\n\n${product.description}`);
    }
} 