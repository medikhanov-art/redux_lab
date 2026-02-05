import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Добро пожаловать в наше приложение</h1>
        <p className="hero-subtitle">
          Современное решение для управления вашим бизнесом. 
          Эффективно, удобно и надежно.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Начать работу</button>
          <button className="hero-btn secondary">Подробнее</button>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <h3>Лям есть</h3>
          <p>Пользователей</p>
        </div>
        <div className="stat-item">
          <h3>25/8</h3>
          <p>Поддержка</p>
        </div>
        <div className="stat-item">
          <h3>9999999.9%</h3>
          <p>Доступность</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;