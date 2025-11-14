import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cartItemCount }) => {
    return (
        <div className="app-layout">
            <Header cartItemCount={cartItemCount} />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
