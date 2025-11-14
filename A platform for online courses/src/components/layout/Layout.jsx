import Header from './Header';
import Footer from './Footer';
import { useCart } from '../../context/CartContext';

const Layout = ({ children }) => {
    const { getCartCount } = useCart();

    return (
        <div className="app-layout">
            <Header cartItemCount={getCartCount()} />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
