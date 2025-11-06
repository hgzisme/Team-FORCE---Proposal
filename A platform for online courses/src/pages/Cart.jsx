import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import '../styles/Cart.css';
import { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 2,
            title: "Data Science and Machine Learning A-Z",
            instructor: "Dr. Michael Chen",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop",
            price: 94.99,
            originalPrice: 149.99
        },
        {
            id: 6,
            title: "UI/UX Design Complete Course",
            instructor: "Lisa Anderson",
            thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=120&fit=crop",
            price: 74.99,
            originalPrice: 109.99
        }
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice, 0);
    const savings = originalTotal - subtotal;

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <div className="empty-cart-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added any courses yet</p>
                    <Link to="/courses" className="btn btn-primary">
                        Browse Courses
                    </Link>
                </div>
            ) : (
                <div className="cart-container">
                    <div className="cart-items">
                        <p className="cart-count">{cartItems.length} Course{cartItems.length > 1 ? 's' : ''} in Cart</p>

                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.thumbnail} alt={item.title} />
                                <div className="item-info">
                                    <h3>{item.title}</h3>
                                    <p className="item-instructor">By {item.instructor}</p>
                                    <div className="item-meta">
                                        <span className="item-rating">⭐ 4.8</span>
                                        <span className="item-duration">• 32 hours</span>
                                        <span className="item-lectures">• 245 lectures</span>
                                    </div>
                                </div>
                                <div className="item-price">
                                    <span className="current-price">${item.price}</span>
                                    <span className="original-price">${item.originalPrice}</span>
                                </div>
                                <button
                                    className="btn-remove"
                                    onClick={() => removeItem(item.id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Original Price:</span>
                            <span>${originalTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row discount">
                            <span>Discount:</span>
                            <span>-${savings.toFixed(2)}</span>
                        </div>
                        <div className="summary-divider" />
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <button className="btn btn-checkout">
                            Proceed to Checkout
                        </button>

                        <div className="promo-code">
                            <input type="text" placeholder="Enter promo code" />
                            <button className="btn btn-apply">Apply</button>
                        </div>

                        <div className="guarantee">
                            <h4>💯 30-Day Money-Back Guarantee</h4>
                            <p>Full refund if you're not satisfied</p>
                        </div>
                    </div>
                </div>
            )}

            <section className="recommended-courses">
                <h2>You might also like</h2>
                <div className="recommended-grid">
                    {[1, 5, 7].map(id => (
                        <div key={id} className="recommended-card">
                            <img
                                src={`https://images.unsplash.com/photo-${['1498050108023', '1512941937669', '1550751827'][id % 3]}-c5249f4df085?w=300&h=180&fit=crop`}
                                alt="Course"
                            />
                            <div className="recommended-info">
                                <h4>Course Title {id}</h4>
                                <p>Instructor Name</p>
                                <div className="recommended-footer">
                                    <span className="price">$79.99</span>
                                    <button className="btn-add-cart">
                                        <Plus size={16} /> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Cart;
