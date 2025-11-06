import { Star, Clock, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/CourseCard.css';

const CourseCard = ({ course }) => {
    return (
        <Link to={`/course/${course.id}`} className="course-card">
            <div className="course-image">
                <img src={course.thumbnail} alt={course.title} />
                <span className="course-level">{course.level}</span>
            </div>

            <div className="course-content">
                <h3 className="course-title">{course.title}</h3>

                <p className="course-instructor">
                    <img src={course.instructorImage} alt={course.instructor} />
                    {course.instructor}
                </p>

                <div className="course-stats">
                    <div className="stat">
                        <Star size={16} fill="#fbbf24" color="#fbbf24" />
                        <span>{course.rating}</span>
                        <span className="reviews">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="stat">
                        <Users size={16} />
                        <span>{course.students.toLocaleString()} students</span>
                    </div>
                </div>

                <div className="course-meta">
                    <div className="meta-item">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                        <BarChart3 size={16} />
                        <span>{course.lectures} lectures</span>
                    </div>
                </div>

                <div className="course-footer">
                    <div className="course-price">
                        <span className="current-price">${course.price}</span>
                        <span className="original-price">${course.originalPrice}</span>
                    </div>
                    <span className="course-category">{course.category}</span>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
