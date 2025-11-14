import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import DocumentDetail from './pages/DocumentDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';

function App() {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/document/:slug" element={<DocumentDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<div className="container" style={{ padding: '4rem 0' }}><h1>Dashboard - Coming Soon</h1></div>} />
              <Route path="/about" element={<div className="container" style={{ padding: '4rem 0' }}><h1>About Us - Coming Soon</h1></div>} />
              <Route path="/contact" element={<div className="container" style={{ padding: '4rem 0' }}><h1>Contact - Coming Soon</h1></div>} />
              <Route path="*" element={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}><h1>404 - Page Not Found</h1></div>} />
            </Routes>
          </Layout>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
