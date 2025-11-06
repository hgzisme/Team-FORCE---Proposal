import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <BookOpen size={32} />
                        <span>LearnHub</span>
                    </div>
                    <p className="footer-description">
                        Empower your learning journey with thousands of expert-led courses.
                        Learn anytime, anywhere, at your own pace.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Top Categories</h3>
                    <ul>
                        <li><Link to="/courses?category=web">Web Development</Link></li>
                        <li><Link to="/courses?category=data">Data Science</Link></li>
                        <li><Link to="/courses?category=cloud">Cloud Computing</Link></li>
                        <li><Link to="/courses?category=design">Design</Link></li>
                        <li><Link to="/courses?category=marketing">Marketing</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/help">Help Center</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/refund">Refund Policy</Link></li>
                        <li><Link to="/sitemap">Sitemap</Link></li>
                        <li><Link to="/accessibility">Accessibility</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 LearnHub. All rights reserved.</p>
                <p>Made with ❤️ for learners worldwide</p>
            </div>
        </footer>
    );
};

export default Footer;
