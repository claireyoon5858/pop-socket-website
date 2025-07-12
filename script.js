// Product data
const products = [
    {
        id: 1,
        name: "Classic Black PopSocket",
        description: "The original PopSocket in sleek black. Perfect for any phone.",
        price: 14.99,
        image: "classic-black"
    },
    {
        id: 2,
        name: "Rainbow Gradient PopSocket",
        description: "Vibrant rainbow gradient design that stands out from the crowd.",
        price: 16.99,
        image: "rainbow-gradient"
    },
    {
        id: 3,
        name: "Marble Pattern PopSocket",
        description: "Elegant marble pattern for a sophisticated look.",
        price: 18.99,
        image: "marble-pattern"
    },
    {
        id: 4,
        name: "Glitter Gold PopSocket",
        description: "Sparkling gold glitter design for maximum glamour.",
        price: 19.99,
        image: "glitter-gold"
    },
    {
        id: 5,
        name: "Clear Transparent PopSocket",
        description: "Invisible grip that doesn't interfere with your phone's design.",
        price: 15.99,
        image: "clear-transparent"
    },
    {
        id: 6,
        name: "Neon Pink PopSocket",
        description: "Bold neon pink for those who love to make a statement.",
        price: 17.99,
        image: "neon-pink"
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
function loadProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <div class="product-color" style="background: ${getProductColor(product.image)};"></div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
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