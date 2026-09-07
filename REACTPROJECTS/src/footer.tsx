import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2 className="logo">📘 MyBlog</h2>

        <p className="tagline">
          Sharing knowledge, one article at a time.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </div>

        <p className="copyright">
          © 2026 MyBlog • Built with ❤️ using React, Node.js & MongoDB
        </p>

      </div>
    </footer>
  );
};

export default Footer;