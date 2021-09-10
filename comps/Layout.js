import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="home-dark">

      {/* End Header Section */}
      <Header />
      {children}
    </div>
  );
}

export default Layout;