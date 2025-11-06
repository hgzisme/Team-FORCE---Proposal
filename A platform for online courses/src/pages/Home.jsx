import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, TrendingUp, Award, Users } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { coursesData, categories } from '../data/coursesData';
import '../styles/Home.css';

const Home = () => {
    const featuredCourses = coursesData.slice(0, 4);
    const trendingCourses = coursesData.slice(4, 8);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Unlock Your Potential with <span className="highlight">Expert-Led Courses</span>
                    </h1>
                    <p className="hero-subtitle">
                        Join millions of learners worldwide. Learn new skills, advance your career,
                        and achieve your goals with our comprehensive online courses.
                    </p>
                    <div className="hero-actions">
                        <Link to="/courses" className="btn btn-primary">
                            Explore Courses <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            Learn More
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <Users size={24} />
                            <div>
                                <h3>50K+</h3>
                                <p>Active Students</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <Award size={24} />
                            <div>
                                <h3>1,000+</h3>
                                <p>Courses Available</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <Star size={24} fill="#fbbf24" color="#fbbf24" />
                            <div>
                                <h3>4.8/5</h3>
                                <p>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                        alt="Students learning online"
                    />
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <div className="section-header">
                    <h2>Explore Top Categories</h2>
                    <p>Discover courses across various fields and industries</p>
                </div>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={`/courses?category=${category.name.toLowerCase()}`}
                            className="category-card"
                        >
                            <div className="category-icon">
                                {category.name === 'Web Development' && '💻'}
                                {category.name === 'Data Science' && '📊'}
                                {category.name === 'Cloud Computing' && '☁️'}
                                {category.name === 'Marketing' && '📈'}
                                {category.name === 'Mobile Development' && '📱'}
                                {category.name === 'Design' && '🎨'}
                                {category.name === 'IT & Security' && '🔒'}
                                {category.name === 'Programming' && '⚡'}
                            </div>
                            <h3>{category.name}</h3>
                            <p>{category.count.toLocaleString()} courses</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Courses */}
            <section className="courses-section">
                <div className="section-header">
                    <h2>Featured Courses</h2>
                    <p>Hand-picked courses by our expert instructors</p>
                </div>
                <div className="courses-grid">
                    {featuredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="section-footer">
                    <Link to="/courses" className="btn btn-outline">
                        View All Courses <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Trending Courses */}
            <section className="courses-section trending">
                <div className="section-header">
                    <div className="trending-badge">
                        <TrendingUp size={24} />
                        <span>Trending Now</span>
                    </div>
                    <h2>Most Popular Courses</h2>
                    <p>Join thousands of students learning these top-rated courses</p>
                </div>
                <div className="courses-grid">
                    {trendingCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="features-section">
                <div className="section-header">
                    <h2>Why Learn With LearnHub?</h2>
                    <p>Everything you need to succeed in your learning journey</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎓</div>
                        <h3>Expert Instructors</h3>
                        <p>Learn from industry professionals with years of real-world experience</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⏰</div>
                        <h3>Learn at Your Pace</h3>
                        <p>Access courses anytime, anywhere, and learn at your own schedule</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Mobile Friendly</h3>
                        <p>Learn on the go with our mobile-optimized platform</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🏆</div>
                        <h3>Certificates</h3>
                        <p>Earn certificates upon completion to showcase your achievements</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💬</div>
                        <h3>Community Support</h3>
                        <p>Connect with fellow learners and get help when you need it</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">♾️</div>
                        <h3>Lifetime Access</h3>
                        <p>Get unlimited access to course materials even after completion</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Learning?</h2>
                    <p>Join over 50,000 students already learning with LearnHub</p>
                    <Link to="/signup" className="btn btn-cta">
                        Get Started Today <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
