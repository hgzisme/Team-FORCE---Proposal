import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { coursesData, categories } from '../data/coursesData';
import '../styles/Courses.css';

const Courses = () => {
    const [filteredCourses, setFilteredCourses] = useState(coursesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [priceRange, setPriceRange] = useState('All');
    const [sortBy, setSortBy] = useState('popular');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        let results = [...coursesData];

        // Search filter
        if (searchTerm) {
            results = results.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory !== 'All') {
            results = results.filter(course => course.category === selectedCategory);
        }

        // Level filter
        if (selectedLevel !== 'All') {
            results = results.filter(course => course.level === selectedLevel);
        }

        // Price filter
        if (priceRange !== 'All') {
            results = results.filter(course => {
                if (priceRange === 'free') return course.price === 0;
                if (priceRange === 'under50') return course.price < 50;
                if (priceRange === '50to100') return course.price >= 50 && course.price <= 100;
                if (priceRange === 'over100') return course.price > 100;
                return true;
            });
        }

        // Sorting
        if (sortBy === 'popular') {
            results.sort((a, b) => b.students - a.students);
        } else if (sortBy === 'rating') {
            results.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'price-low') {
            results.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            results.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'newest') {
            results.sort((a, b) => b.id - a.id);
        }

        setFilteredCourses(results);
    }, [searchTerm, selectedCategory, selectedLevel, priceRange, sortBy]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('All');
        setSelectedLevel('All');
        setPriceRange('All');
        setSortBy('popular');
    };

    return (
        <div className="courses-page">
            <div className="courses-header">
                <h1>Explore Our Courses</h1>
                <p>Discover {coursesData.length} courses to help you reach your goals</p>
            </div>

            <div className="courses-container">
                {/* Sidebar Filters */}
                <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
                    <div className="filters-header">
                        <h2>Filters</h2>
                        <button className="close-filters" onClick={() => setShowFilters(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="filter-group">
                        <h3>Category</h3>
                        <div className="filter-options">
                            <label className="filter-option">
                                <input
                                    type="radio"
                                    name="category"
                                    checked={selectedCategory === 'All'}
                                    onChange={() => setSelectedCategory('All')}
                                />
                                <span>All Categories</span>
                            </label>
                            {categories.map((cat, index) => (
                                <label key={index} className="filter-option">
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={selectedCategory === cat.name}
                                        onChange={() => setSelectedCategory(cat.name)}
                                    />
                                    <span>{cat.name} ({cat.count})</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Level</h3>
                        <div className="filter-options">
                            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                <label key={level} className="filter-option">
                                    <input
                                        type="radio"
                                        name="level"
                                        checked={selectedLevel === level}
                                        onChange={() => setSelectedLevel(level)}
                                    />
                                    <span>{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Price</h3>
                        <div className="filter-options">
                            <label className="filter-option">
                                <input
                                    type="radio"
                                    name="price"
                                    checked={priceRange === 'All'}
                                    onChange={() => setPriceRange('All')}
                                />
                                <span>All Prices</span>
                            </label>
                            <label className="filter-option">
                                <input
                                    type="radio"
                                    name="price"
                                    checked={priceRange === 'free'}
                                    onChange={() => setPriceRange('free')}
                                />
                                <span>Free</span>
                            </label>
                            <label className="filter-option">
                                <input
                                    type="radio"
                                    name="price"
                                    checked={priceRange === 'under50'}
                                    onChange={() => setPriceRange('under50')}
                                />
                                <span>Under $50</span>
                            </label>
                            <label className="filter-option">
                                <input
                                    type="radio"
                                    name="price"
                                    checked={priceRange === '50to100'}
                                    onChange={() => setPriceRange('50to100')}
                                />
                                <span>$50 - $100</span>
                            </label>
                            <label className="filter-option">
                                <input
                                    type="radio"
                                    name="price"
                                    checked={priceRange === 'over100'}
                                    onChange={() => setPriceRange('over100')}
                                />
                                <span>Over $100</span>
                            </label>
                        </div>
                    </div>

                    <button className="btn-clear-filters" onClick={clearFilters}>
                        Clear All Filters
                    </button>
                </aside>

                {/* Main Content */}
                <div className="courses-main">
                    <div className="courses-toolbar">
                        <div className="search-bar">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <button className="btn-filters-mobile" onClick={() => setShowFilters(true)}>
                            <Filter size={20} />
                            Filters
                        </button>

                        <select
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="newest">Newest</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="results-info">
                        <p>{filteredCourses.length} courses found</p>
                    </div>

                    {filteredCourses.length > 0 ? (
                        <div className="courses-grid">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>No courses found</h3>
                            <p>Try adjusting your filters or search terms</p>
                            <button className="btn btn-primary" onClick={clearFilters}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Courses;
