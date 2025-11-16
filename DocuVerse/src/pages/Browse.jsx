import { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp, ShoppingCart, Eye, Check } from 'lucide-react';
import DocumentCard from '../components/documents/DocumentCard';
import { documents, categories, fileTypes } from '../data/documents';

const Browse = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedFileTypes, setSelectedFileTypes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sortBy, setSortBy] = useState('popular');
    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        fileTypes: true,
        price: true
    });

    // Toggle category selection
    const toggleCategory = (slug) => {
        setSelectedCategories(prev =>
            prev.includes(slug)
                ? prev.filter(cat => cat !== slug)
                : [...prev, slug]
        );
    };

    // Toggle file type selection
    const toggleFileType = (type) => {
        setSelectedFileTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    // Clear all filters
    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedFileTypes([]);
        setPriceRange([0, 200]);
    };

    // Remove individual filter
    const removeFilter = (type, value) => {
        if (type === 'category') {
            setSelectedCategories(prev => prev.filter(cat => cat !== value));
        } else if (type === 'fileType') {
            setSelectedFileTypes(prev => prev.filter(t => t !== value));
        }
    };

    // Toggle accordion sections
    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Filter documents
    const filteredDocuments = documents.filter(doc => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(doc.category.toLowerCase())) {
            return false;
        }
        if (selectedFileTypes.length > 0 && !selectedFileTypes.includes(doc.fileType)) {
            return false;
        }
        if (doc.price < priceRange[0] || doc.price > priceRange[1]) {
            return false;
        }
        return true;
    });

    // Count active filters
    const activeFiltersCount = selectedCategories.length + selectedFileTypes.length;
    const hasActiveFilters = activeFiltersCount > 0;

    return (
        <div className="browse-modern">
            <div className="browse-container">
                {/* Page Header */}
                <div className="browse-page-header">
                    <div>
                        <h1 className="browse-page-title">Browse All Documents</h1>
                        <p className="browse-page-subtitle">
                            Discover {documents.length}+ professional documents and templates from expert creators
                        </p>
                    </div>
                </div>

                <div className="browse-layout">
                    {/* Sticky Filter Sidebar */}
                    <aside className="filter-sidebar-modern">
                        {/* Active Filters */}
                        {hasActiveFilters && (
                            <div className="active-filters-section">
                                <div className="active-filters-header">
                                    <span className="active-filters-title">
                                        Active Filters ({activeFiltersCount})
                                    </span>
                                    <button
                                        className="clear-all-btn"
                                        onClick={clearAllFilters}
                                    >
                                        Clear All
                                    </button>
                                </div>
                                <div className="active-filters-tags">
                                    {selectedCategories.map(cat => (
                                        <div key={cat} className="filter-tag">
                                            <span>{categories.find(c => c.slug === cat)?.name}</span>
                                            <button onClick={() => removeFilter('category', cat)}>
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    {selectedFileTypes.map(type => (
                                        <div key={type} className="filter-tag">
                                            <span>{type}</span>
                                            <button onClick={() => removeFilter('fileType', type)}>
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Categories Filter */}
                        <div className="filter-section">
                            <button
                                className="filter-section-header"
                                onClick={() => toggleSection('categories')}
                            >
                                <h3 className="filter-section-title">Categories</h3>
                                {expandedSections.categories ?
                                    <ChevronUp size={20} /> :
                                    <ChevronDown size={20} />
                                }
                            </button>
                            {expandedSections.categories && (
                                <div className="filter-section-content">
                                    {categories.map(category => (
                                        <label
                                            key={category.id}
                                            className="filter-checkbox-item"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category.slug)}
                                                onChange={() => toggleCategory(category.slug)}
                                            />
                                            <span className="checkbox-custom">
                                                {selectedCategories.includes(category.slug) &&
                                                    <Check size={14} />
                                                }
                                            </span>
                                            <span className="filter-label">{category.name}</span>
                                            <span className="filter-count">{category.count}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* File Type Filter */}
                        <div className="filter-section">
                            <button
                                className="filter-section-header"
                                onClick={() => toggleSection('fileTypes')}
                            >
                                <h3 className="filter-section-title">File Type</h3>
                                {expandedSections.fileTypes ?
                                    <ChevronUp size={20} /> :
                                    <ChevronDown size={20} />
                                }
                            </button>
                            {expandedSections.fileTypes && (
                                <div className="filter-section-content">
                                    {fileTypes.map(type => (
                                        <label
                                            key={type.id}
                                            className="filter-checkbox-item"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedFileTypes.includes(type.extension.toUpperCase())}
                                                onChange={() => toggleFileType(type.extension.toUpperCase())}
                                            />
                                            <span className="checkbox-custom">
                                                {selectedFileTypes.includes(type.extension.toUpperCase()) &&
                                                    <Check size={14} />
                                                }
                                            </span>
                                            <span className="filter-label">{type.name}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Price Range Filter */}
                        <div className="filter-section">
                            <button
                                className="filter-section-header"
                                onClick={() => toggleSection('price')}
                            >
                                <h3 className="filter-section-title">Price Range</h3>
                                {expandedSections.price ?
                                    <ChevronUp size={20} /> :
                                    <ChevronDown size={20} />
                                }
                            </button>
                            {expandedSections.price && (
                                <div className="filter-section-content">
                                    <div className="price-range-display">
                                        <span>${priceRange[0]}</span>
                                        <span>-</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className="price-slider"
                                    />
                                    <div className="price-inputs">
                                        <input
                                            type="number"
                                            min="0"
                                            max={priceRange[1]}
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                            className="price-input"
                                            placeholder="Min"
                                        />
                                        <input
                                            type="number"
                                            min={priceRange[0]}
                                            max="200"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 200])}
                                            className="price-input"
                                            placeholder="Max"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="browse-main-modern">
                        {/* Results Bar */}
                        <div className="results-bar">
                            <div className="results-count">
                                Showing <strong>{filteredDocuments.length}</strong> of <strong>{documents.length}</strong> results
                            </div>
                            <div className="sort-controls">
                                <label htmlFor="sort-select" className="sort-label">Sort by:</label>
                                <select
                                    id="sort-select"
                                    className="sort-dropdown-modern"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest First</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {filteredDocuments.length > 0 ? (
                            <div className="products-grid-modern">
                                {filteredDocuments.map(document => (
                                    <DocumentCard
                                        key={document.id}
                                        document={document}
                                        gridView={true}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state-modern">
                                <Filter size={80} className="empty-icon-modern" />
                                <h2 className="empty-title-modern">No documents found</h2>
                                <p className="empty-description-modern">
                                    Try adjusting your filters to see more results
                                </p>
                                <button
                                    className="btn-empty-clear"
                                    onClick={clearAllFilters}
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Browse;
