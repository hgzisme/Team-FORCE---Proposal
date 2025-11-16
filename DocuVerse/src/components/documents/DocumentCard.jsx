import { Link } from 'react-router-dom';
import { Star, User, FileText, BookOpen, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

const DocumentCard = ({ document, featured = false, trending = false }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addToCart, isInCart } = useCart();
    const { success, info } = useToast();
    const inCart = isInCart(document.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (!inCart) {
            const result = addToCart(document);
            if (result.success) {
                success(`"${document.title}" added to cart!`);
            } else {
                info(result.message);
            }
        }
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        setIsWishlisted(!isWishlisted);
    };

    return (
        <Link
            to={`/document/${document.slug}`}
            className={`document-card ${featured ? 'document-card-featured' : ''} ${trending ? 'document-card-trending' : ''}`}
        >
            <div className="document-card-image">
                <img src={document.thumbnail} alt={document.title} />
                <div className="document-card-badges">
                    <span className="document-type-badge">{document.fileType}</span>
                    {document.discountPercentage > 0 && (
                        <span className="document-discount-badge">
                            {document.discountPercentage}% OFF
                        </span>
                    )}
                </div>
            </div>

            <div className="document-card-content">
                <h3 className="document-card-title">{document.title}</h3>

                <div className="document-card-author">
                    <User size={14} />
                    <span>{document.author.name}</span>
                </div>

                <div className="document-card-meta">
                    <div className="document-card-rating">
                        <div className="rating-stars">
                            <Star size={14} fill="#fbbf24" color="#fbbf24" />
                            <span>{document.rating}</span>
                        </div>
                        <span className="rating-count">({document.reviewCount.toLocaleString()})</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <User size={14} />
                        <span>{document.downloads.toLocaleString()}</span>
                    </div>
                </div>

                <div className="document-card-tags">
                    <span className="document-tag">
                        <FileText size={12} />
                        {document.pages} pages
                    </span>
                    <span className="document-tag">
                        <BookOpen size={12} />
                        {document.fileType}
                    </span>
                </div>
            </div>

            <div className="document-card-footer">
                <div className="document-card-price">
                    <span className="price-current">${document.price}</span>
                    {document.originalPrice && (
                        <span className="price-original">${document.originalPrice}</span>
                    )}
                </div>
                <div className="document-card-action">
                    <button
                        className={`btn-add-to-cart ${inCart ? 'in-cart' : ''}`}
                        onClick={handleAddToCart}
                        disabled={inCart}
                    >
                        <ShoppingCart size={16} />
                        <span>{inCart ? 'In Cart' : 'Add'}</span>
                    </button>
                    <button
                        className={`btn-wishlist ${isWishlisted ? 'active' : ''}`}
                        onClick={handleWishlist}
                    >
                        <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default DocumentCard;
