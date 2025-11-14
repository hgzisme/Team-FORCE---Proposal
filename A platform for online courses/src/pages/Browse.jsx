import { useState } from 'react';
import { Filter } from 'lucide-react';
import DocumentCard from '../components/documents/DocumentCard';
import { documents, categories, fileTypes } from '../data/documents';

const Browse = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFileType, setSelectedFileType] = useState('all');
    const [sortBy, setSortBy] = useState('popular');

    const filteredDocuments = documents.filter(doc => {
        if (selectedCategory !== 'all' && doc.category.toLowerCase() !== selectedCategory) {
            return false;
        }
        if (selectedFileType !== 'all' && doc.fileType !== selectedFileType) {
            return false;
        }
        return true;
    });

    return (
        <div className="browse-page">
            <div className="container">
                <div className="browse-header">
                    <h1 className="browse-title">Browse All Documents</h1>
                    <p className="browse-subtitle">
                        Discover {documents.length}+ professional documents and templates
                    </p>
                </div>

                <div className="browse-toolbar">
                    <div className="browse-results-count">
                        Showing {filteredDocuments.length} results
                    </div>
                    <div className="browse-controls">
                        <select 
                            className="sort-dropdown"
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

                <div className="browse-content">
                    <div className="sidebar">
                        <div className="sidebar-section">
                            <h3 className="sidebar-title">Categories</h3>
                            <div className="sidebar-list">
                                <div 
                                    className={`sidebar-item ${selectedCategory === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('all')}
                                >
                                    <span className="sidebar-item-label">All Categories</span>
                                </div>
                                {categories.map(category => (
                                    <div
                                        key={category.id}
                                        className={`sidebar-item ${selectedCategory === category.slug ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(category.slug)}
                                    >
                                        <span className="sidebar-item-label">{category.name}</span>
                                        <span className="sidebar-item-count">{category.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-section">
                            <h3 className="sidebar-title">File Type</h3>
                            <div className="sidebar-list">
                                <div 
                                    className={`sidebar-item ${selectedFileType === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedFileType('all')}
                                >
                                    <span className="sidebar-item-label">All Types</span>
                                </div>
                                {fileTypes.map(type => (
                                    <div
                                        key={type.id}
                                        className={`sidebar-item ${selectedFileType === type.extension.toUpperCase() ? 'active' : ''}`}
                                        onClick={() => setSelectedFileType(type.extension.toUpperCase())}
                                    >
                                        <span className="sidebar-item-label">{type.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="browse-main">
                        <div className="documents-grid">
                            {filteredDocuments.map(document => (
                                <DocumentCard key={document.id} document={document} />
                            ))}
                        </div>

                        {filteredDocuments.length === 0 && (
                            <div className="empty-state">
                                <Filter className="empty-icon" size={120} />
                                <h2 className="empty-title">No documents found</h2>
                                <p className="empty-description">
                                    Try adjusting your filters to see more results
                                </p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSelectedFileType('all');
                                    }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Browse;
