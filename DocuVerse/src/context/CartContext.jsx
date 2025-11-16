import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on init
        const savedCart = localStorage.getItem('docuverse_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('docuverse_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (document) => {
        // Check if item already in cart
        const existingItem = cartItems.find(item => item.id === document.id);

        if (existingItem) {
            // Item already in cart - show message or do nothing
            return { success: false, message: 'Item already in cart' };
        }

        // Add new item to cart
        const cartItem = {
            id: document.id,
            title: document.title,
            slug: document.slug,
            price: document.price,
            originalPrice: document.originalPrice,
            discountPercentage: document.discountPercentage,
            thumbnail: document.thumbnail,
            fileType: document.fileType,
            author: document.author?.name || 'Unknown',
            license: document.license,
            addedAt: new Date().toISOString()
        };

        setCartItems(prev => [...prev, cartItem]);
        return { success: true, message: 'Added to cart successfully' };
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const isInCart = (documentId) => {
        return cartItems.some(item => item.id === documentId);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const getCartCount = () => {
        return cartItems.length;
    };

    const getSavingsTotal = () => {
        return cartItems.reduce((total, item) => {
            if (item.originalPrice) {
                return total + (item.originalPrice - item.price);
            }
            return total;
        }, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartCount,
        getSavingsTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
