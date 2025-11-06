import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, BookOpen } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ cartCount = 0 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <BookOpen size={32} />
                    <span>LearnHub</span>
                </Link>

                <div className="navbar-search">
                    <Search size={20} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="navbar-links">
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/categories" className="nav-link">Categories</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/cart" className="nav-icon">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <Link to="/dashboard" className="nav-icon">
                        <User size={24} />
                    </Link>
                    <Link to="/login" className="btn-login">Log In</Link>
                    <Link to="/signup" className="btn-signup">Sign Up</Link>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-search">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Link to="/courses" onClick={toggleMenu}>Courses</Link>
                    <Link to="/categories" onClick={toggleMenu}>Categories</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/cart" onClick={toggleMenu}>
                        Cart {cartCount > 0 && `(${cartCount})`}
                    </Link>
                    <Link to="/dashboard" onClick={toggleMenu}>My Learning</Link>
                    <Link to="/login" onClick={toggleMenu}>Log In</Link>
                    <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
