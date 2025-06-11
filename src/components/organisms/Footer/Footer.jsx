import "./Footer.css";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-page">
          <ul className="footer-list">
            <a href="#" className="footer-link">
              Namangan OITS
            </a>
            <li className="footer-item">
              <a href="#" className="footer-links">
                Главная
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-links">
                Филиалы
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-links">
                О нас
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-links">
                Контакты
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <p className="footer-name">Присоединяйтесь к нам</p>
            <li className="footer-items">
              <span>
                <a href="#" className="footer-title">
                  <FaTelegram />
                </a>
              </span>
              <span>
                <a href="#" className="footer-title">
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a href="#" className="footer-title">
                  <FaYoutube />
                </a>
              </span>
            </li>
          </ul>
          <ul className="footer-list">
            <p className="footer-name">Заказывайте по номеру</p>
            <li className="footer-item">
              <a href="tel:+998931704448" className="footer-links">
                +998 93 170 44 48
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
