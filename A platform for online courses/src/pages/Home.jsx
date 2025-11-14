import { Link } from 'react-router-dom';
import {
    Search, Briefcase, Scale, TrendingUp, DollarSign, Palette, Code,
    GraduationCap, Sparkles, ArrowRight, Star, CheckCircle, Clock,
    Award, Users, Shield, Zap, Target, TrendingUp as TrendingIcon,
    FileText, Download
} from 'lucide-react';
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

    // Mock data for trusted companies
    const trustedCompanies = [
        { name: 'Microsoft', logo: 'https://img.logo.dev/microsoft.com?token=pk_X-NWvEi5QeeDafPUNlXYYQ' },
        { name: 'Google', logo: 'https://img.logo.dev/google.com?token=pk_X-NWvEi5QeeDafPUNlXYYQ' },
        { name: 'Amazon', logo: 'https://img.logo.dev/amazon.com?token=pk_X-NWvEi5QeeDafPUNlXYYQ' },
        { name: 'Stanford', logo: 'https://img.logo.dev/stanford.edu?token=pk_X-NWvEi5QeeDafPUNlXYYQ' },
        { name: 'Harvard', logo: 'https://img.logo.dev/harvard.edu?token=pk_X-NWvEi5QeeDafPUNlXYYQ' },
    ];

    // Top creators
    const topCreators = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Business Consultant',
            expertise: 'Venture Capital & Business Strategy',
            avatar: 'https://i.pravatar.cc/150?img=47',
            documents: 24,
            rating: 4.9,
            quote: 'I create templates that have helped entrepreneurs raise over $50M in funding.'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Legal Expert',
            expertise: 'Corporate Law & Contracts',
            avatar: 'https://i.pravatar.cc/150?img=33',
            documents: 31,
            rating: 5.0,
            quote: 'My legal templates protect businesses while saving thousands in legal fees.'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Marketing Strategist',
            expertise: 'Digital Marketing & Growth',
            avatar: 'https://i.pravatar.cc/150?img=45',
            documents: 18,
            rating: 4.8,
            quote: 'I specialize in marketing playbooks that drive measurable results for startups.'
        }
    ];

    // Testimonials
    const testimonials = [
        {
            id: 1,
            quote: 'This business plan template was the cornerstone of our successful seed round. The financial projections alone saved us weeks of work.',
            author: 'James Wilson',
            title: 'CEO',
            company: 'TechStart Inc.',
            avatar: 'https://i.pravatar.cc/150?img=12',
            rating: 5
        },
        {
            id: 2,
            quote: 'The legal contract templates are incredibly thorough and professional. My lawyer was impressed, and I saved $3,000 in legal fees.',
            author: 'Lisa Anderson',
            title: 'Founder',
            company: 'GrowthLab',
            avatar: 'https://i.pravatar.cc/150?img=48',
            rating: 5
        },
        {
            id: 3,
            quote: 'The quality of documents here is unmatched. Every template I\'ve purchased has been worth 10x the price. Highly recommend!',
            author: 'David Park',
            title: 'Product Manager',
            company: 'InnovateCo',
            avatar: 'https://i.pravatar.cc/150?img=51',
            rating: 5
        }
    ];

    return (
        <div className="home-premium">
            {/* Premium Hero Section */}
            <section className="premium-hero">
                <div className="hero-background-animation"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="premium-hero-title">
                            Unlock Professional Excellence
                        </h1>
                        <p className="premium-hero-subtitle">
                            Access a curated library of expert-crafted templates and guides to accelerate your success
                        </p>

                        <div className="hero-stats-row">
                            <div className="hero-stat-item">
                                <FileText size={24} />
                                <div>
                                    <span className="stat-value">50,000+</span>
                                    <span className="stat-label">Premium Documents</span>
                                </div>
                            </div>
                            <div className="hero-stat-item">
                                <Users size={24} />
                                <div>
                                    <span className="stat-value">25,000+</span>
                                    <span className="stat-label">Expert Creators</span>
                                </div>
                            </div>
                            <div className="hero-stat-item">
                                <Download size={24} />
                                <div>
                                    <span className="stat-value">1M+</span>
                                    <span className="stat-label">Successful Downloads</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose DocuVerse */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="premium-section-title">Why Choose DocuVerse?</h2>
                        <p className="premium-section-subtitle">
                            The most trusted platform for professional documents
                        </p>
                    </div>

                    <div className="why-choose-grid">
                        <div className="why-card">
                            <div className="why-icon">
                                <Shield size={32} />
                            </div>
                            <h3>Vetted Experts</h3>
                            <p>
                                Every document is created by a vetted industry professional with proven expertise and track record.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <Clock size={32} />
                            </div>
                            <h3>Save Hundreds of Hours</h3>
                            <p>
                                Fully customizable templates get you started instantly. No more building from scratch or reinventing the wheel.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <Award size={32} />
                            </div>
                            <h3>Proven Results</h3>
                            <p>
                                Join thousands of successful professionals who trust our resources to achieve their most important goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Categories */}
            <section className="premium-categories">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="premium-section-title">Explore Categories</h2>
                        <p className="premium-section-subtitle">
                            Find the perfect documents for your professional needs
                        </p>
                    </div>

                    <div className="premium-categories-grid">
                        {categories.map(category => {
                            const Icon = categoryIcons[category.slug] || Briefcase;
                            return (
                                <Link
                                    key={category.id}
                                    to={`/browse?category=${category.slug}`}
                                    className="premium-category-card"
                                >
                                    <div className="premium-category-bg"></div>
                                    <div className="premium-category-content">
                                        <div className="premium-category-icon">
                                            <Icon size={36} />
                                        </div>
                                        <h3 className="premium-category-name">{category.name}</h3>
                                        <p className="premium-category-count">{category.count} documents</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Editor's Picks */}
            <section className="editors-picks">
                <div className="container">
                    <div className="section-header-centered">
                        <div className="editors-badge">
                            <Star size={18} fill="currentColor" />
                            <span>Editor's Picks</span>
                        </div>
                        <h2 className="premium-section-title">Curated for Excellence</h2>
                        <p className="premium-section-subtitle">
                            Premium documents selected by our team of experts for exceptional quality
                        </p>
                    </div>

                    <div className="premium-documents-grid">
                        {featuredDocuments.map(document => (
                            <DocumentCard
                                key={document.id}
                                document={document}
                                featured={true}
                            />
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link to="/browse" className="btn-premium-primary btn-lg">
                            Explore All Documents
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Meet Our Experts */}
            <section className="creators-spotlight">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="premium-section-title">Meet Our Experts</h2>
                        <p className="premium-section-subtitle">
                            Real professionals creating documents that drive real results
                        </p>
                    </div>

                    <div className="creators-grid">
                        {topCreators.map(creator => (
                            <div key={creator.id} className="creator-spotlight-card">
                                <div className="creator-header">
                                    <img src={creator.avatar} alt={creator.name} className="creator-avatar" />
                                    <div className="creator-badge-verified">
                                        <CheckCircle size={20} />
                                        <span>Verified Expert</span>
                                    </div>
                                </div>
                                <div className="creator-info">
                                    <h3 className="creator-name">{creator.name}</h3>
                                    <p className="creator-role">{creator.role}</p>
                                    <p className="creator-expertise">{creator.expertise}</p>

                                    <blockquote className="creator-quote">
                                        "{creator.quote}"
                                    </blockquote>

                                    <div className="creator-stats-row">
                                        <div className="creator-stat">
                                            <FileText size={16} />
                                            <span>{creator.documents} docs</span>
                                        </div>
                                        <div className="creator-stat">
                                            <Star size={16} fill="currentColor" />
                                            <span>{creator.rating} rating</span>
                                        </div>
                                    </div>

                                    <Link to={`/creator/${creator.id}`} className="btn-creator-view">
                                        View All by {creator.name.split(' ')[0]}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending This Week */}
            <section className="trending-section">
                <div className="container">
                    <div className="section-header-centered">
                        <div className="trending-badge">
                            <TrendingIcon size={18} />
                            <span>Trending Now</span>
                        </div>
                        <h2 className="premium-section-title">Most Popular This Week</h2>
                        <p className="premium-section-subtitle">
                            See what top professionals are downloading right now
                        </p>
                    </div>

                    <div className="premium-documents-grid">
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

            {/* Testimonials */}
            <section className="testimonials-section-home">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="premium-section-title">Loved by Professionals Worldwide</h2>
                        <p className="premium-section-subtitle">
                            See what our customers say about their experience
                        </p>
                    </div>

                    <div className="testimonials-grid-home">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="testimonial-card-home">
                                <div className="testimonial-stars-home">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star key={star} size={18} fill="#fbbf24" color="#fbbf24" />
                                    ))}
                                </div>
                                <blockquote className="testimonial-quote-home">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="testimonial-author-home">
                                    <img src={testimonial.avatar} alt={testimonial.author} />
                                    <div>
                                        <div className="testimonial-author-name">{testimonial.author}</div>
                                        <div className="testimonial-author-title">
                                            {testimonial.title}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="premium-cta-section">
                <div className="premium-cta-content">
                    <div className="premium-cta-background"></div>
                    <div className="premium-cta-inner">
                        <h2 className="premium-cta-title">Ready to Elevate Your Work?</h2>
                        <p className="premium-cta-description">
                            Join over 100,000 professionals who trust DocuVerse to accelerate their success
                        </p>
                        <div className="premium-cta-buttons">
                            <Link to="/browse" className="btn-cta-white">
                                Explore Documents
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/sell" className="btn-cta-outline">
                                Become a Creator
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
