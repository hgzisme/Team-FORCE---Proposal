import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    Star, Download, Heart, ShoppingCart, User, Check,
    FileText, Calendar, Shield, ArrowLeft, Share2, Award,
    TrendingUp, Users, Clock, CheckCircle, Zap, Target,
    BarChart, DollarSign, Lock
} from 'lucide-react';
import { documents, licenses } from '../data/documents';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function DocumentDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const document = documents.find(doc => doc.slug === slug);
    const { addToCart, isInCart } = useCart();
    const { success, info } = useToast();
    const [activeTab, setActiveTab] = useState('overview');
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!document) {
        return (
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
                <h1>Document Not Found</h1>
                <p style={{ marginTop: '16px', marginBottom: '24px' }}>The document you're looking for doesn't exist.</p>
                <Link to="/browse" className="btn btn-primary">Browse Documents</Link>
            </div>
        );
    }

    const license = licenses.find(l => l.id === document.license);
    const allImages = [document.thumbnail, ...document.previewImages];
    const inCart = isInCart(document.id);

    const handleAddToCart = () => {
        if (!inCart) {
            const result = addToCart(document);
            if (result.success) {
                success(`"${document.title}" added to cart!`);
            } else {
                info(result.message);
            }
        }
    };

    const handleBuyNow = () => {
        if (!inCart) {
            const result = addToCart(document);
            if (result.success) {
                success(`"${document.title}" added to cart!`);
            }
        }
        navigate('/cart');
    };

    const handleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="document-detail-modern">
            {/* Breadcrumb */}
            <div className="modern-breadcrumb">
                <div className="container-wide">
                    <Link to="/" className="breadcrumb-link">
                        <ArrowLeft size={16} />
                        Home
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to="/browse" className="breadcrumb-link">Browse</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to={`/browse?category=${document.category.toLowerCase()}`} className="breadcrumb-link">
                        {document.category}
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{document.title}</span>
                </div>
            </div>

            <div className="container-wide">
                <div className="modern-layout">
                    {/* Main Content Area (Left - Wide Column) */}
                    <div className="main-content-area">

                        {/* HERO SECTION */}
                        <section className="hero-section">
                            <div className="hero-content">
                                <div className="category-pill">
                                    <span>{document.category}</span>
                                    {document.subcategory && <span>• {document.subcategory}</span>}
                                </div>

                                <h1 className="hero-title">{document.title}</h1>

                                <p className="hero-subtitle">
                                    The proven, {document.pages}-page template used by {document.downloads.toLocaleString()}+ entrepreneurs to secure funding.
                                </p>

                                {/* Social Proof Badges */}
                                <div className="social-proof-badges">
                                    <div className="proof-badge">
                                        <Star size={20} fill="currentColor" className="star-icon" />
                                        <div className="badge-content">
                                            <div className="badge-value">{document.rating}/5</div>
                                            <div className="badge-label">({document.reviewCount} Reviews)</div>
                                        </div>
                                    </div>

                                    <div className="proof-badge">
                                        <CheckCircle size={20} className="check-icon" />
                                        <div className="badge-content">
                                            <div className="badge-value">{document.downloads.toLocaleString()}+</div>
                                            <div className="badge-label">Downloads</div>
                                        </div>
                                    </div>

                                    <div className="proof-badge">
                                        <Award size={20} className="award-icon" />
                                        <div className="badge-content">
                                            <div className="badge-value">Funding-Approved</div>
                                            <div className="badge-label">Template</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image Gallery */}
                            <div className="hero-gallery">
                                <div className="main-preview">
                                    <img src={allImages[selectedImage]} alt={document.title} />
                                    {document.discountPercentage > 0 && (
                                        <div className="preview-badge discount">
                                            {document.discountPercentage}% OFF
                                        </div>
                                    )}
                                    {document.isNew && (
                                        <div className="preview-badge new">NEW</div>
                                    )}
                                </div>
                                {allImages.length > 1 && (
                                    <div className="gallery-thumbnails">
                                        {allImages.map((img, index) => (
                                            <button
                                                key={index}
                                                className={`gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                                                onClick={() => setSelectedImage(index)}
                                            >
                                                <img src={img} alt={`Preview ${index + 1}`} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* WHAT'S INSIDE - Visual Preview Section */}
                        <section className="whats-inside-section">
                            <h2 className="section-title">What's Inside This Template?</h2>
                            <p className="section-subtitle">
                                High-quality, professionally designed pages that save you weeks of work
                            </p>

                            <div className="preview-grid">
                                <div className="preview-card">
                                    <div className="preview-mockup">
                                        <img src={document.thumbnail} alt="Executive Summary" />
                                    </div>
                                    <div className="preview-info">
                                        <h3>Executive Summary</h3>
                                        <p>Compelling overview that hooks investors</p>
                                    </div>
                                </div>

                                <div className="preview-card">
                                    <div className="preview-mockup">
                                        <BarChart size={48} className="mockup-icon" />
                                    </div>
                                    <div className="preview-info">
                                        <h3>5-Year Financial Projections</h3>
                                        <p>Detailed charts, graphs, and forecasts</p>
                                    </div>
                                </div>

                                <div className="preview-card">
                                    <div className="preview-mockup">
                                        <Target size={48} className="mockup-icon" />
                                    </div>
                                    <div className="preview-info">
                                        <h3>Market Analysis</h3>
                                        <p>In-depth competitor and industry research</p>
                                    </div>
                                </div>

                                <div className="preview-card">
                                    <div className="preview-mockup">
                                        <FileText size={48} className="mockup-icon" />
                                    </div>
                                    <div className="preview-info">
                                        <h3>Complete Table of Contents</h3>
                                        <p>All {document.pages} pages structured perfectly</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* KEY FEATURES - Reimagined */}
                        <section className="features-section">
                            <h2 className="section-title">Why Choose This Template?</h2>

                            <div className="features-grid">
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <Zap size={24} />
                                    </div>
                                    <h3>Professionally Designed Pages</h3>
                                    <p>Impress investors with a clean, modern design that's fully customizable in Word or Google Docs.</p>
                                </div>

                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h3>Financial Projections Built-In</h3>
                                    <p>Pre-formatted spreadsheets with formulas already set up for accurate financial forecasting.</p>
                                </div>

                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <Target size={24} />
                                    </div>
                                    <h3>Funding-Ready Format</h3>
                                    <p>Follows the exact structure that banks and investors expect to see. Proven to help secure funding.</p>
                                </div>

                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <Clock size={24} />
                                    </div>
                                    <h3>Save Weeks of Work</h3>
                                    <p>Everything you need is already written. Just customize with your business details and you're done.</p>
                                </div>

                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <Users size={24} />
                                    </div>
                                    <h3>Trusted by 10,000+ Entrepreneurs</h3>
                                    <p>Join thousands of successful business owners who've used this template to launch their ventures.</p>
                                </div>

                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <CheckCircle size={24} />
                                    </div>
                                    <h3>Lifetime Updates Included</h3>
                                    <p>Get all future versions and improvements at no additional cost. One-time purchase, forever access.</p>
                                </div>
                            </div>
                        </section>

                        {/* TESTIMONIALS */}
                        <section className="testimonials-section">
                            <h2 className="section-title">What Entrepreneurs Are Saying</h2>

                            <div className="testimonials-grid">
                                <div className="testimonial-card featured">
                                    <div className="testimonial-stars">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <blockquote>
                                        "This template saved me weeks of work and was instrumental in securing our first round of funding. The financial projections section alone is worth 10x the price."
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <img src="https://i.pravatar.cc/150?img=12" alt="John Doe" />
                                        <div>
                                            <div className="author-name">John Doe</div>
                                            <div className="author-title">CEO, Innovate Co.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonial-card">
                                    <div className="testimonial-stars">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <blockquote>
                                        "Professional, comprehensive, and easy to customize. My bank was impressed with the quality of my business plan."
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <img src="https://i.pravatar.cc/150?img=47" alt="Sarah Miller" />
                                        <div>
                                            <div className="author-name">Sarah Miller</div>
                                            <div className="author-title">Founder, TechStart</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonial-card">
                                    <div className="testimonial-stars">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <blockquote>
                                        "Best investment I made for my startup. Everything is thought out and well-structured. Highly recommend!"
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <img src="https://i.pravatar.cc/150?img=33" alt="Michael Chen" />
                                        <div>
                                            <div className="author-name">Michael Chen</div>
                                            <div className="author-title">Owner, GrowthLab</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ABOUT THE CREATOR */}
                        <section className="creator-section">
                            <div className="creator-card">
                                <img src={document.author.avatar} alt={document.author.name} className="creator-photo" />
                                <div className="creator-content">
                                    <div className="creator-badge">Created by</div>
                                    <h3 className="creator-name">{document.author.name}</h3>
                                    <div className="creator-title">{document.author.role}</div>
                                    <p className="creator-bio">
                                        Sarah is a seasoned business consultant with over 15 years of experience helping startups
                                        secure funding. She's advised 200+ companies and has helped them raise over $50M in capital.
                                        This template represents her proven methodology for creating business plans that investors love.
                                    </p>
                                    <div className="creator-stats">
                                        <div className="creator-stat">
                                            <FileText size={20} />
                                            <span>{document.author.documents} Documents</span>
                                        </div>
                                        <div className="creator-stat">
                                            <Download size={20} />
                                            <span>{document.downloads.toLocaleString()}+ Downloads</span>
                                        </div>
                                        <div className="creator-stat">
                                            <Star size={20} fill="currentColor" />
                                            <span>{document.rating} Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* DETAILED TABS */}
                        <section className="details-tabs-section">
                            <div className="tabs-navigation">
                                <button
                                    className={`tab-nav-button ${activeTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    Overview
                                </button>
                                <button
                                    className={`tab-nav-button ${activeTab === 'contents' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('contents')}
                                >
                                    What's Included
                                </button>
                                <button
                                    className={`tab-nav-button ${activeTab === 'reviews' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('reviews')}
                                >
                                    Reviews ({document.reviewCount})
                                </button>
                                <button
                                    className={`tab-nav-button ${activeTab === 'license' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('license')}
                                >
                                    License
                                </button>
                            </div>

                            <div className="tabs-content-area">
                                {activeTab === 'overview' && (
                                    <div className="tab-content">
                                        <h3>About This Template</h3>
                                        <p className="tab-description">{document.longDescription}</p>

                                        <h4>All Features Included</h4>
                                        <ul className="checklist">
                                            {document.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Check size={20} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="tags-cloud">
                                            {document.tags.map((tag, index) => (
                                                <span key={index} className="tag-item">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'contents' && (
                                    <div className="tab-content">
                                        <h3>Everything You'll Receive</h3>
                                        <div className="contents-cards">
                                            <div className="content-detail-card">
                                                <FileText size={32} />
                                                <h4>{document.fileType} Document</h4>
                                                <p>{document.pages} professionally formatted pages</p>
                                                <span className="file-size">{document.fileSize}</span>
                                            </div>
                                            <div className="content-detail-card">
                                                <Download size={32} />
                                                <h4>Instant Download</h4>
                                                <p>Available immediately after purchase</p>
                                                <span className="file-size">No waiting</span>
                                            </div>
                                            <div className="content-detail-card">
                                                <Shield size={32} />
                                                <h4>Lifetime Access</h4>
                                                <p>Download anytime from your account</p>
                                                <span className="file-size">Forever</span>
                                            </div>
                                            <div className="content-detail-card">
                                                <CheckCircle size={32} />
                                                <h4>Free Updates</h4>
                                                <p>Get all future versions at no cost</p>
                                                <span className="file-size">Included</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'reviews' && (
                                    <div className="tab-content">
                                        <div className="reviews-header">
                                            <div className="reviews-score">
                                                <div className="score-number">{document.rating}</div>
                                                <div className="score-stars">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <Star key={star} size={24} fill={star <= Math.round(document.rating) ? 'currentColor' : 'none'} />
                                                    ))}
                                                </div>
                                                <div className="score-text">{document.reviewCount} reviews</div>
                                            </div>
                                        </div>
                                        <p className="coming-soon">Full reviews section coming soon...</p>
                                    </div>
                                )}

                                {activeTab === 'license' && (
                                    <div className="tab-content">
                                        <h3>{license?.name}</h3>
                                        <p className="tab-description">{license?.description}</p>
                                        <h4>What's Allowed</h4>
                                        <ul className="checklist">
                                            {license?.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Check size={20} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* STICKY SIDEBAR (Right - Purchase Box) */}
                    <aside className="sticky-sidebar">
                        <div className="purchase-card">
                            {/* Pricing */}
                            <div className="sidebar-pricing">
                                <div className="price-main">${document.price.toFixed(2)}</div>
                                {document.originalPrice && (
                                    <div className="price-original">${document.originalPrice.toFixed(2)}</div>
                                )}
                                {document.discountPercentage > 0 && (
                                    <div className="discount-tag">{document.discountPercentage}% OFF</div>
                                )}
                            </div>

                            {/* CTA Buttons */}
                            <div className="sidebar-actions">
                                <button className="btn-cta-primary" onClick={handleBuyNow}>
                                    <ShoppingCart size={20} />
                                    {inCart ? 'Go to Checkout' : 'Buy Now & Download'}
                                </button>
                                <button
                                    className="btn-cta-secondary"
                                    onClick={handleAddToCart}
                                    disabled={inCart}
                                >
                                    {inCart ? '✓ In Cart' : 'Add to Cart'}
                                </button>
                            </div>

                            {/* Trust Signals */}
                            <div className="trust-signals">
                                <div className="trust-item">
                                    <Download size={18} />
                                    <span>Instant Download</span>
                                </div>
                                <div className="trust-item">
                                    <Lock size={18} />
                                    <span>Secure Checkout</span>
                                </div>
                                <div className="trust-item">
                                    <Shield size={18} />
                                    <span>14-Day Money-Back Guarantee</span>
                                </div>
                            </div>

                            {/* File Details */}
                            <div className="file-details">
                                <h4>File Information</h4>
                                <div className="detail-row">
                                    <span className="detail-label">Format:</span>
                                    <span className="detail-value">{document.fileType}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Pages:</span>
                                    <span className="detail-value">{document.pages}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Size:</span>
                                    <span className="detail-value">{document.fileSize}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Updated:</span>
                                    <span className="detail-value">
                                        {new Date(document.updatedAt).toLocaleDateString('en-US', {
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">License:</span>
                                    <span className="detail-value">{license?.name}</span>
                                </div>
                            </div>

                            {/* Secondary Actions */}
                            <div className="sidebar-secondary-actions">
                                <button
                                    className={`btn-icon-action ${isWishlisted ? 'active' : ''}`}
                                    onClick={handleWishlist}
                                    aria-label="Add to wishlist"
                                >
                                    <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                                    <span>Wishlist</span>
                                </button>
                                <button className="btn-icon-action" aria-label="Share">
                                    <Share2 size={20} />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
