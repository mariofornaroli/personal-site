import Header from "./Header"
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div className="home-dark">
        <Header />
        {children}
      </div>
    </>
  );
}

export default Layout;