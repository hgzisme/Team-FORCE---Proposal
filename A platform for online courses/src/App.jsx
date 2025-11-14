import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import './index.css';

function App() {
    const [cartItemCount, setCartItemCount] = useState(0);

    return (
        <Router>
            <Layout cartItemCount={cartItemCount}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/document/:slug" element={<div className="container" style={{ padding: '4rem 0' }}><h1>Document Detail - Coming Soon</h1></div>} />
                    <Route path="/cart" element={<div className="container" style={{ padding: '4rem 0' }}><h1>Shopping Cart - Coming Soon</h1></div>} />
                    <Route path="/dashboard" element={<div className="container" style={{ padding: '4rem 0' }}><h1>Dashboard - Coming Soon</h1></div>} />
                    <Route path="/about" element={<div className="container" style={{ padding: '4rem 0' }}><h1>About Us - Coming Soon</h1></div>} />
                    <Route path="/contact" element={<div className="container" style={{ padding: '4rem 0' }}><h1>Contact - Coming Soon</h1></div>} />
                    <Route path="*" element={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}><h1>404 - Page Not Found</h1></div>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
