import { Link } from 'react-router-dom';
import { BookMarked, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <BookMarked size={32} style={{ display: 'inline', marginRight: '8px' }} />
                            DocuVerse
                        </Link>
                        <p className="footer-description">
                            Your trusted marketplace for high-quality documents, templates, and educational resources. 
                            Empowering professionals and businesses worldwide.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Products</h3>
                        <div className="footer-links">
                            <Link to="/browse" className="footer-link">Browse Documents</Link>
                            <Link to="/categories" className="footer-link">Categories</Link>
                            <Link to="/new" className="footer-link">New Arrivals</Link>
                            <Link to="/featured" className="footer-link">Featured</Link>
                            <Link to="/bestsellers" className="footer-link">Best Sellers</Link>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>For Sellers</h3>
                        <div className="footer-links">
                            <Link to="/sell" className="footer-link">Sell Documents</Link>
                            <Link to="/seller-dashboard" className="footer-link">Seller Dashboard</Link>
                            <Link to="/seller-guide" className="footer-link">Seller Guide</Link>
                            <Link to="/pricing" className="footer-link">Pricing & Fees</Link>
                            <Link to="/success-stories" className="footer-link">Success Stories</Link>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Company</h3>
                        <div className="footer-links">
                            <Link to="/about" className="footer-link">About Us</Link>
                            <Link to="/blog" className="footer-link">Blog</Link>
                            <Link to="/careers" className="footer-link">Careers</Link>
                            <Link to="/press" className="footer-link">Press Kit</Link>
                            <Link to="/contact" className="footer-link">Contact</Link>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Support</h3>
                        <div className="footer-links">
                            <Link to="/help" className="footer-link">Help Center</Link>
                            <Link to="/faq" className="footer-link">FAQ</Link>
                            <Link to="/safety" className="footer-link">Safety & Trust</Link>
                            <Link to="/guidelines" className="footer-link">Guidelines</Link>
                            <Link to="/report" className="footer-link">Report Issue</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 DocuVerse. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/licensing">Licensing</Link>
                        <Link to="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
