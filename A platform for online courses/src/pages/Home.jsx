import { Link } from 'react-router-dom';
import { Search, Briefcase, Scale, TrendingUp, DollarSign, Palette, Code, GraduationCap, Sparkles, ArrowRight, Star } from 'lucide-react';
import DocumentCard from '../components/documents/DocumentCard';
import { documents, categories } from '../data/documents';

const Home = () => {
    const featuredDocuments = documents.filter(doc => doc.isFeatured).slice(0, 3);
    const trendingDocuments = documents.filter(doc => doc.isTrending).slice(0, 3);

    const categoryIcons = {
        'business': Briefcase,
        'legal': Scale,
        'marketing': TrendingUp,
        'finance': DollarSign,
        'design': Palette,
        'technology': Code,
        'education': GraduationCap,
        'creative': Sparkles
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="home-hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Your Premium Document Marketplace
                    </h1>
                    <p className="hero-subtitle">
                        Discover high-quality templates, guides, and resources from expert creators worldwide.
                        Start building your business today.
                    </p>
                    
                    <div className="hero-search" style={{ position: 'relative' }}>
                        <Search className="hero-search-icon" size={24} />
                        <input
                            type="text"
                            className="hero-search-input"
                            placeholder="Search for documents, templates, guides..."
                        />
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-value">50K+</span>
                            <span className="hero-stat-label">Documents</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">25K+</span>
                            <span className="hero-stat-label">Creators</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">1M+</span>
                            <span className="hero-stat-label">Downloads</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="home-categories">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Browse by Category</h2>
                        <p className="section-description">
                            Find the perfect documents for your needs across our diverse categories
                        </p>
                    </div>

                    <div className="categories-grid">
                        {categories.map(category => {
                            const Icon = categoryIcons[category.slug] || Briefcase;
                            return (
                                <Link
                                    key={category.id}
                                    to={`/browse?category=${category.slug}`}
                                    className="category-card"
                                >
                                    <div className="category-icon">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="category-name">{category.name}</h3>
                                    <p className="category-count">{category.count} documents</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Documents */}
            <section className="home-featured">
                <div className="container">
                    <div className="section-header">
                        <span className="featured-badge">
                            <Star size={18} fill="currentColor" />
                            Featured
                        </span>
                        <h2 className="section-title">Handpicked for You</h2>
                        <p className="section-description">
                            Premium documents curated by our team of experts
                        </p>
                    </div>

                    <div className="documents-grid">
                        {featuredDocuments.map(document => (
                            <DocumentCard 
                                key={document.id} 
                                document={document}
                                featured={true}
                            />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--spacing-12)' }}>
                        <Link to="/browse" className="btn btn-primary btn-lg">
                            View All Documents
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trending Documents */}
            <section className="home-featured">
                <div className="container">
                    <div className="section-header">
                        <span className="featured-badge" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
                            <TrendingUp size={18} />
                            Trending
                        </span>
                        <h2 className="section-title">Most Popular This Week</h2>
                        <p className="section-description">
                            Join thousands of users who trust these top-rated documents
                        </p>
                    </div>

                    <div className="documents-grid">
                        {trendingDocuments.map(document => (
                            <DocumentCard 
                                key={document.id} 
                                document={document}
                                trending={true}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-cta">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Get Started?</h2>
                    <p className="cta-description">
                        Join thousands of professionals who trust DocuVerse for their document needs
                    </p>
                    <div className="cta-buttons">
                        <Link to="/browse" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-primary)' }}>
                            Browse Documents
                        </Link>
                        <Link to="/sell" className="btn btn-secondary btn-lg">
                            Become a Seller
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
