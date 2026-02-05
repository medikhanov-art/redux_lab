import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">МойПроект</Link>
        </div>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Главная</Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashboard" className="navbar-link">Дашборд</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link">Товары</Link>
          </li>
          <li className="navbar-item">
            <Link to="/orders" className="navbar-link">Заказы</Link>
          </li>
          <li className="navbar-item">
            <Link to="/customers" className="navbar-link">Клиенты</Link>
          </li>
          <li className="navbar-item">
            <Link to="/analytics" className="navbar-link">Аналитика</Link>
          </li>
          <li className="navbar-item">
            <Link to="/settings" className="navbar-link">Настройки</Link>
          </li>
        </ul>
        
        <div className="navbar-user">
          <span className="user-name">Пользователь</span>
          <button className="logout-btn">Выйти</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;