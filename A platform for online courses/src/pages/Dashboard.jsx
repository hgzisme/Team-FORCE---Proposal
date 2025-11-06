import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Award, BarChart3 } from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('enrolled');

    // Mock enrolled courses
    const enrolledCourses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop",
            progress: 65,
            lastAccessed: "2 hours ago",
            duration: "42 hours",
            completedLectures: 185,
            totalLectures: 285
        },
        {
            id: 3,
            title: "AWS Cloud Practitioner Certification",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
            progress: 40,
            lastAccessed: "1 day ago",
            duration: "28 hours",
            completedLectures: 79,
            totalLectures: 198
        },
        {
            id: 8,
            title: "Python Programming: From Zero to Hero",
            thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop",
            progress: 85,
            lastAccessed: "3 days ago",
            duration: "26 hours",
            completedLectures: 155,
            totalLectures: 182
        }
    ];

    const completedCourses = [
        {
            id: 4,
            title: "Digital Marketing Masterclass 2024",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
            completedDate: "2 weeks ago",
            certificate: true,
            rating: 5
        }
    ];

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>My Learning Dashboard</h1>
                    <p>Track your progress and continue learning</p>
                </div>
                <Link to="/courses" className="btn btn-primary">
                    Browse More Courses
                </Link>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                        <BarChart3 size={24} />
                    </div>
                    <div>
                        <h3>{enrolledCourses.length}</h3>
                        <p>Courses in Progress</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                        <Award size={24} />
                    </div>
                    <div>
                        <h3>{completedCourses.length}</h3>
                        <p>Courses Completed</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3>127h</h3>
                        <p>Total Learning Time</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#fce7f3', color: '#db2777' }}>
                        <Award size={24} />
                    </div>
                    <div>
                        <h3>4</h3>
                        <p>Certificates Earned</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-tabs">
                <button
                    className={activeTab === 'enrolled' ? 'active' : ''}
                    onClick={() => setActiveTab('enrolled')}
                >
                    Enrolled Courses ({enrolledCourses.length})
                </button>
                <button
                    className={activeTab === 'completed' ? 'active' : ''}
                    onClick={() => setActiveTab('completed')}
                >
                    Completed ({completedCourses.length})
                </button>
                <button
                    className={activeTab === 'wishlist' ? 'active' : ''}
                    onClick={() => setActiveTab('wishlist')}
                >
                    Wishlist
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'enrolled' && (
                    <div className="enrolled-courses">
                        {enrolledCourses.map(course => (
                            <div key={course.id} className="enrolled-course-card">
                                <div className="course-thumbnail">
                                    <img src={course.thumbnail} alt={course.title} />
                                    <Link to={`/course/${course.id}/learn`} className="play-overlay">
                                        <Play size={48} />
                                    </Link>
                                </div>
                                <div className="course-info">
                                    <h3>{course.title}</h3>
                                    <p className="last-accessed">Last accessed: {course.lastAccessed}</p>

                                    <div className="progress-section">
                                        <div className="progress-info">
                                            <span>{course.progress}% complete</span>
                                            <span>{course.completedLectures}/{course.totalLectures} lectures</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="course-actions">
                                        <Link to={`/course/${course.id}/learn`} className="btn btn-primary btn-sm">
                                            Continue Learning
                                        </Link>
                                        <Link to={`/course/${course.id}`} className="btn btn-outline btn-sm">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="completed-courses">
                        {completedCourses.map(course => (
                            <div key={course.id} className="completed-course-card">
                                <img src={course.thumbnail} alt={course.title} />
                                <div className="course-info">
                                    <h3>{course.title}</h3>
                                    <p className="completed-date">Completed {course.completedDate}</p>
                                    {course.certificate && (
                                        <div className="certificate-badge">
                                            <Award size={20} />
                                            <span>Certificate Available</span>
                                        </div>
                                    )}
                                    <div className="course-actions">
                                        <button className="btn btn-primary btn-sm">
                                            Download Certificate
                                        </button>
                                        <Link to={`/course/${course.id}`} className="btn btn-outline btn-sm">
                                            Review Course
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'wishlist' && (
                    <div className="wishlist-empty">
                        <Award size={64} />
                        <h3>Your wishlist is empty</h3>
                        <p>Browse our courses and add your favorites to your wishlist</p>
                        <Link to="/courses" className="btn btn-primary">
                            Browse Courses
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
