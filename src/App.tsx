import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div className="content-wrapper text-center">
        <h1 className="domain-title">
          <span className="highlight">Codeservir</span>.com
        </h1>
        <small className="subtitle">Available for Sale</small>
        <p className="description">
          For instant purchase, please make an order.
        </p>
        <button className="buy-now-btn">Buy now for $1299</button>

        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+123456789">+91 945 579 1624</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:email@yourdomain.com">info@codeservir.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
