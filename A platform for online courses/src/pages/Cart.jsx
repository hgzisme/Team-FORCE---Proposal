import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowRight, Tag, Shield, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const LICENSE_NAMES = {
    personal: 'Personal License',
    commercial: 'Commercial License',
    extended: 'Extended License'
};

export default function Cart() {
    const { cartItems, removeFromCart, getCartTotal, getSavingsTotal } = useCart();
    const { success } = useToast();
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    const handleRemoveItem = (id, title) => {
        removeFromCart(id);
        success(`"${title}" removed from cart`);
    };

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode.toUpperCase() === 'SAVE10') {
            setAppliedCoupon({ code: 'SAVE10', discount: 10, type: 'percentage' });
        } else {
            alert('Invalid coupon code');
        }
    };

    const subtotal = getCartTotal();
    const savings = getSavingsTotal();

    const couponDiscount = appliedCoupon
        ? appliedCoupon.type === 'percentage'
            ? subtotal * (appliedCoupon.discount / 100)
            : appliedCoupon.discount
        : 0;

    const total = subtotal - couponDiscount;

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="cart-empty">
                        <ShoppingCart size={64} />
                        <h1>Your Cart is Empty</h1>
                        <p>Looks like you haven't added any documents yet.</p>
                        <Link to="/browse" className="btn btn-primary btn-lg">
                            Browse Documents
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p className="cart-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
                </div>

                <div className="cart-grid">
                    {/* Cart Items */}
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <Link to={`/document/${item.slug}`} className="cart-item-image">
                                    <img src={item.thumbnail} alt={item.title} />
                                    <span className="file-type-badge">{item.fileType}</span>
                                </Link>

                                <div className="cart-item-details">
                                    <Link to={`/document/${item.slug}`} className="cart-item-title">
                                        {item.title}
                                    </Link>
                                    <div className="cart-item-meta">
                                        <span className="cart-item-author">by {item.author}</span>
                                        <span className="cart-item-separator">•</span>
                                        <span className="cart-item-license">
                                            <Shield size={14} />
                                            {LICENSE_NAMES[item.license] || item.license}
                                        </span>
                                    </div>
                                </div>

                                <div className="cart-item-price">
                                    <div className="price-current">${item.price.toFixed(2)}</div>
                                    {item.originalPrice && (
                                        <div className="price-original">${item.originalPrice.toFixed(2)}</div>
                                    )}
                                </div>

                                <button
                                    className="cart-item-remove"
                                    onClick={() => handleRemoveItem(item.id, item.title)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        {/* Coupon Code */}
                        <form className="coupon-form" onSubmit={handleApplyCoupon}>
                            <div className="form-group">
                                <label htmlFor="coupon">Coupon Code</label>
                                <div className="coupon-input-group">
                                    <Tag size={18} />
                                    <input
                                        type="text"
                                        id="coupon"
                                        className="input"
                                        placeholder="Enter coupon code"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    <button type="submit" className="btn btn-secondary btn-sm">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </form>

                        {appliedCoupon && (
                            <div className="coupon-applied">
                                <Tag size={16} />
                                <span>Coupon "{appliedCoupon.code}" applied!</span>
                                <button
                                    className="coupon-remove"
                                    onClick={() => setAppliedCoupon(null)}
                                >
                                    ×
                                </button>
                            </div>
                        )}

                        {/* Price Breakdown */}
                        <div className="summary-breakdown">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            {savings > 0 && (
                                <div className="summary-row savings">
                                    <span>You Save</span>
                                    <span>-${savings.toFixed(2)}</span>
                                </div>
                            )}

                            {appliedCoupon && (
                                <div className="summary-row discount">
                                    <span>Coupon Discount ({appliedCoupon.discount}%)</span>
                                    <span>-${couponDiscount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="summary-divider"></div>

                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button className="btn btn-primary btn-lg btn-checkout">
                            Proceed to Checkout
                            <ArrowRight size={20} />
                        </button>

                        {/* Trust Badges */}
                        <div className="cart-trust-badges">
                            <div className="trust-badge">
                                <Shield size={18} />
                                <span>Secure Payment</span>
                            </div>
                            <div className="trust-badge">
                                <Download size={18} />
                                <span>Instant Download</span>
                            </div>
                        </div>

                        {/* Continue Shopping */}
                        <Link to="/browse" className="btn btn-outline btn-block">
                            Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="cart-info">
                    <div className="info-card">
                        <Shield size={24} />
                        <div>
                            <h3>Money-Back Guarantee</h3>
                            <p>Not satisfied? Get a full refund within 30 days.</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Download size={24} />
                        <div>
                            <h3>Instant Access</h3>
                            <p>Download your documents immediately after purchase.</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <Tag size={24} />
                        <div>
                            <h3>Lifetime Updates</h3>
                            <p>Get all future versions and updates for free.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
