import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, BookMarked } from 'lucide-react';
import { useState } from 'react';

const Header = ({ cartItemCount = 0 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <BookMarked size={32} />
                    <span>DocuVerse</span>
                </Link>

                <div className="header-search">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search documents..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <nav className="header-nav">
                    <div className="nav-links">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/browse" className="nav-link">
                            Browse
                        </Link>
                        <Link to="/categories" className="nav-link">
                            Categories
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </div>
                </nav>

                <div className="header-actions">
                    <Link to="/cart" className="header-cart">
                        <ShoppingCart size={24} />
                        {cartItemCount > 0 && (
                            <span className="cart-badge">{cartItemCount}</span>
                        )}
                    </Link>

                    <Link to="/login" className="user-menu">
                        <User size={24} />
                    </Link>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
