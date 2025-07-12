# PopSocket Store Website

A modern, responsive e-commerce website for selling PopSockets (phone grips). Built with HTML, CSS, and JavaScript.

## Features

### 🎨 Modern Design
- Clean, professional layout with gradient backgrounds
- Responsive design that works on all devices
- Smooth animations and transitions
- Mobile-first approach

### 🛒 E-commerce Functionality
- Product catalog with 12 different PopSocket designs
- **MagSafe compatible grips** for iPhone 12 and newer
- **Phone compatibility filtering** (iPhone, Samsung, Google Pixel, OnePlus, Other Android)
- **Grip type filtering** (Classic vs MagSafe)
- Shopping cart with add/remove functionality
- Real-time cart total calculation
- Checkout simulation
- Product notifications

### 📱 User Experience
- Fixed navigation with smooth scrolling
- Mobile hamburger menu
- Contact form with validation
- Interactive product cards
- Modal shopping cart

### 🎯 Key Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **Features** - Highlighting key benefits of PopSockets
3. **Products** - Dynamic product grid with 6 different designs
4. **About** - Information about PopSocket benefits
5. **Contact** - Contact form and business information
6. **Footer** - Links and social media

## Product Collection

The website features 12 premium PopSocket designs across two categories:

### Classic PopSockets (Universal Compatibility)
1. **Classic Black** - $14.99
2. **Rainbow Gradient** - $16.99
3. **Marble Pattern** - $18.99
4. **Glitter Gold** - $19.99
5. **Clear Transparent** - $15.99
6. **Neon Pink** - $17.99

### MagSafe PopSockets (iPhone 12+ Compatible)
7. **MagSafe Black** - $24.99
8. **MagSafe Clear** - $26.99
9. **MagSafe Rainbow** - $28.99
10. **MagSafe Gold** - $29.99
11. **MagSafe Marble** - $27.99
12. **MagSafe Glitter** - $30.99

## Technical Details

### File Structure
```
pop-socket-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Explore** the website and test the functionality

## Features in Detail

### Shopping Cart
- Add products to cart with quantity tracking
- Remove items from cart
- Real-time total calculation
- Modal cart interface
- Checkout simulation

### Responsive Design
- Mobile-first approach
- Breakpoints for different screen sizes
- Touch-friendly interface
- Optimized for all devices

### Interactive Elements
- Hover effects on buttons and cards
- Smooth scrolling navigation
- Animated notifications
- Mobile menu toggle

## Future Enhancements

The website is designed to be easily extensible. Potential future features include:

- **Product Search** - Filter products by name or description
- **Wishlist** - Save products for later
- **Product Quick View** - Detailed product information
- **User Accounts** - Login/registration system
- **Payment Integration** - Real payment processing
- **Product Reviews** - Customer feedback system
- **Inventory Management** - Stock tracking
- **Admin Panel** - Product management interface

## Customization

### Adding New Products
To add new products, edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 7,
        name: "New Design PopSocket",
        description: "Description of the new product.",
        price: 20.99,
        image: "new-design"
    }
    // ... existing products
];
```

### Changing Colors
The website uses a consistent color scheme defined in CSS variables. Main colors:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)
- Danger: `#ef4444` (Red)

### Styling Modifications
All styling is contained in `styles.css` with clear section comments for easy modification.

## Performance

- Optimized images and assets
- Minimal JavaScript for fast loading
- CSS animations for smooth interactions
- Responsive images and layouts

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.

---

**Created with ❤️ for modern e-commerce experiences** 