import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star, Clock, BarChart3, Users, Globe, Award,
    PlayCircle, FileText, Download, CheckCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const course = coursesData.find(c => c.id === parseInt(id));
    const [expandedSections, setExpandedSections] = useState({});
    const [activeTab, setActiveTab] = useState('overview');

    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Course not found</h2>
                <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
            </div>
        );
    }

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="course-detail">
            {/* Hero Section */}
            <div className="course-hero">
                <div className="course-hero-content">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/courses">Courses</Link> / {course.category}
                    </div>

                    <h1 className="course-hero-title">{course.title}</h1>
                    <p className="course-hero-description">{course.description}</p>

                    <div className="course-hero-meta">
                        <div className="meta-item">
                            <Star size={20} fill="#fbbf24" color="#fbbf24" />
                            <span className="rating">{course.rating}</span>
                            <span className="reviews">({course.reviews.toLocaleString()} reviews)</span>
                        </div>
                        <div className="meta-item">
                            <Users size={20} />
                            <span>{course.students.toLocaleString()} students</span>
                        </div>
                        <div className="meta-item">
                            <Globe size={20} />
                            <span>English</span>
                        </div>
                    </div>

                    <div className="course-instructor">
                        <img src={course.instructorImage} alt={course.instructor} />
                        <div>
                            <p className="instructor-label">Created by</p>
                            <p className="instructor-name">{course.instructor}</p>
                        </div>
                    </div>
                </div>

                <div className="course-hero-card">
                    <div className="course-preview">
                        <img src={course.thumbnail} alt={course.title} />
                        <button className="preview-btn">
                            <PlayCircle size={48} />
                            <span>Preview Course</span>
                        </button>
                    </div>

                    <div className="course-price-section">
                        <div className="price-info">
                            <span className="current-price">${course.price}</span>
                            <span className="original-price">${course.originalPrice}</span>
                            <span className="discount">
                                {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                            </span>
                        </div>

                        <button className="btn btn-add-cart">Add to Cart</button>
                        <button className="btn btn-buy-now">Buy Now</button>

                        <p className="money-back">30-Day Money-Back Guarantee</p>
                    </div>

                    <div className="course-includes">
                        <h3>This course includes:</h3>
                        <ul>
                            <li><Clock size={18} /> {course.duration} on-demand video</li>
                            <li><FileText size={18} /> {course.lectures} lectures</li>
                            <li><Download size={18} /> Downloadable resources</li>
                            <li><Award size={18} /> Certificate of completion</li>
                            <li><Globe size={18} /> Full lifetime access</li>
                            <li><Users size={18} /> Access on mobile and TV</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="course-content">
                <div className="course-tabs">
                    <button
                        className={activeTab === 'overview' ? 'active' : ''}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={activeTab === 'curriculum' ? 'active' : ''}
                        onClick={() => setActiveTab('curriculum')}
                    >
                        Curriculum
                    </button>
                    <button
                        className={activeTab === 'instructor' ? 'active' : ''}
                        onClick={() => setActiveTab('instructor')}
                    >
                        Instructor
                    </button>
                    <button
                        className={activeTab === 'reviews' ? 'active' : ''}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                {activeTab === 'overview' && (
                    <div className="tab-content">
                        <section className="course-section">
                            <h2>What you'll learn</h2>
                            <div className="learning-outcomes">
                                {course.whatYouLearn.map((item, index) => (
                                    <div key={index} className="outcome-item">
                                        <CheckCircle size={20} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="course-section">
                            <h2>Requirements</h2>
                            <ul className="requirements-list">
                                {course.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="course-section">
                            <h2>Description</h2>
                            <p className="course-description">{course.description}</p>
                            <p>
                                This comprehensive course is designed to take you from beginner to advanced level.
                                You'll work on real-world projects and gain practical experience that you can
                                immediately apply in your career.
                            </p>
                            <p>
                                Our expert instructor brings years of industry experience and has helped thousands
                                of students achieve their learning goals. The course is regularly updated with new
                                content to ensure you're learning the latest techniques and best practices.
                            </p>
                        </section>
                    </div>
                )}

                {activeTab === 'curriculum' && (
                    <div className="tab-content">
                        <section className="course-section">
                            <h2>Course Curriculum</h2>
                            <p className="curriculum-stats">
                                {course.curriculum.length} sections • {course.lectures} lectures • {course.duration} total length
                            </p>

                            <div className="curriculum-list">
                                {course.curriculum.map((section, index) => (
                                    <div key={index} className="curriculum-section">
                                        <button
                                            className="section-header"
                                            onClick={() => toggleSection(index)}
                                        >
                                            <div className="section-info">
                                                {expandedSections[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                <span className="section-title">{section.section}</span>
                                            </div>
                                            <span className="section-meta">
                                                {section.lectures} lectures • {section.duration}
                                            </span>
                                        </button>

                                        {expandedSections[index] && (
                                            <div className="section-content">
                                                {Array.from({ length: Math.min(section.lectures, 5) }).map((_, i) => (
                                                    <div key={i} className="lecture-item">
                                                        <PlayCircle size={16} />
                                                        <span>Lecture {i + 1}: Introduction to {section.section}</span>
                                                        <span className="lecture-duration">
                                                            {Math.floor(Math.random() * 15) + 5} min
                                                        </span>
                                                    </div>
                                                ))}
                                                {section.lectures > 5 && (
                                                    <p className="more-lectures">
                                                        + {section.lectures - 5} more lectures
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'instructor' && (
                    <div className="tab-content">
                        <section className="course-section">
                            <h2>About the Instructor</h2>
                            <div className="instructor-card">
                                <img src={course.instructorImage} alt={course.instructor} className="instructor-avatar" />
                                <div className="instructor-info">
                                    <h3>{course.instructor}</h3>
                                    <p className="instructor-title">Professional Instructor & Industry Expert</p>

                                    <div className="instructor-stats">
                                        <div className="stat">
                                            <Star size={20} fill="#fbbf24" color="#fbbf24" />
                                            <span>4.8 Instructor Rating</span>
                                        </div>
                                        <div className="stat">
                                            <Award size={20} />
                                            <span>15 Courses</span>
                                        </div>
                                        <div className="stat">
                                            <Users size={20} />
                                            <span>120,000+ Students</span>
                                        </div>
                                    </div>

                                    <p className="instructor-bio">
                                        {course.instructor} is a seasoned professional with over 15 years of experience
                                        in the industry. Having worked with top companies and startups, they bring real-world
                                        expertise to every course. Their teaching style focuses on practical applications
                                        and hands-on learning, ensuring students gain skills they can use immediately.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="tab-content">
                        <section className="course-section">
                            <h2>Student Feedback</h2>
                            <div className="reviews-summary">
                                <div className="rating-overview">
                                    <div className="rating-number">{course.rating}</div>
                                    <div className="rating-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />
                                        ))}
                                    </div>
                                    <p className="rating-text">Course Rating</p>
                                </div>

                                <div className="rating-bars">
                                    {[5, 4, 3, 2, 1].map(rating => (
                                        <div key={rating} className="rating-bar-item">
                                            <span className="bar-label">{rating} ★</span>
                                            <div className="bar-background">
                                                <div
                                                    className="bar-fill"
                                                    style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                                                />
                                            </div>
                                            <span className="bar-percentage">
                                                {rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="reviews-list">
                                {[1, 2, 3].map((review) => (
                                    <div key={review} className="review-item">
                                        <div className="review-header">
                                            <img src={`https://i.pravatar.cc/60?img=${review * 3}`} alt="Student" />
                                            <div>
                                                <h4>Student Name</h4>
                                                <div className="review-stars">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="review-date">2 weeks ago</span>
                                        </div>
                                        <p className="review-text">
                                            Excellent course! The instructor explains everything clearly and the
                                            projects are very practical. I've learned so much and can't wait to
                                            apply these skills in my career. Highly recommended!
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseDetail;
