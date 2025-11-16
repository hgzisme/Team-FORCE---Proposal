import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, AlertCircle } from 'lucide-react';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        accountType: 'buyer'
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation
        if (!formData.name) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Handle signup
        console.log('Signup:', formData);
        // Will integrate with AuthContext
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                {/* Left Side - Branding */}
                <div className="auth-brand">
                    <div className="brand-content">
                        <h1 className="brand-title">Join DocuVerse Today!</h1>
                        <p className="brand-subtitle">
                            Create your account and start accessing premium documents or selling your own creations.
                        </p>
                        <div className="brand-features">
                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div className="feature-text">Access 50,000+ premium documents</div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div className="feature-text">Instant downloads after purchase</div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div className="feature-text">Sell your documents and earn</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="auth-form-container">
                    <div className="auth-form-wrapper">
                        <div className="auth-header">
                            <h2>Create Account</h2>
                            <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
                        </div>

                        <form className="auth-form" onSubmit={handleSubmit}>
                            {/* Account Type */}
                            <div className="form-group">
                                <label>I want to</label>
                                <div className="account-type-selector">
                                    <label className={`account-type-option ${formData.accountType === 'buyer' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="accountType"
                                            value="buyer"
                                            checked={formData.accountType === 'buyer'}
                                            onChange={handleChange}
                                        />
                                        <div className="option-content">
                                            <div className="option-title">Buy Documents</div>
                                            <div className="option-desc">Access premium documents</div>
                                        </div>
                                    </label>
                                    <label className={`account-type-option ${formData.accountType === 'seller' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="accountType"
                                            value="seller"
                                            checked={formData.accountType === 'seller'}
                                            onChange={handleChange}
                                        />
                                        <div className="option-content">
                                            <div className="option-title">Sell Documents</div>
                                            <div className="option-desc">Earn by selling your work</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <div className={`input-group ${errors.name ? 'error' : ''}`}>
                                    <User size={20} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="input"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.name && (
                                    <div className="error-message">
                                        <AlertCircle size={16} />
                                        <span>{errors.name}</span>
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <div className={`input-group ${errors.email ? 'error' : ''}`}>
                                    <Mail size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.email && (
                                    <div className="error-message">
                                        <AlertCircle size={16} />
                                        <span>{errors.email}</span>
                                    </div>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className={`input-group ${errors.password ? 'error' : ''}`}>
                                    <Lock size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        className="input"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="input-icon-button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <div className="error-message">
                                        <AlertCircle size={16} />
                                        <span>{errors.password}</span>
                                    </div>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className={`input-group ${errors.confirmPassword ? 'error' : ''}`}>
                                    <Lock size={20} />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="input"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="input-icon-button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <div className="error-message">
                                        <AlertCircle size={16} />
                                        <span>{errors.confirmPassword}</span>
                                    </div>
                                )}
                            </div>

                            {/* Terms Agreement */}
                            <div className="form-group">
                                <label className={`checkbox-label ${errors.agreeToTerms ? 'error' : ''}`}>
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                    />
                                    <span>
                                        I agree to the <Link to="/terms" className="link">Terms of Service</Link> and{' '}
                                        <Link to="/privacy" className="link">Privacy Policy</Link>
                                    </span>
                                </label>
                                {errors.agreeToTerms && (
                                    <div className="error-message">
                                        <AlertCircle size={16} />
                                        <span>{errors.agreeToTerms}</span>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="auth-divider">
                            <span>or sign up with</span>
                        </div>

                        {/* Social Signup */}
                        <div className="social-login">
                            <button className="btn btn-social">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google
                            </button>
                            <button className="btn btn-social">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
