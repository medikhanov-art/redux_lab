import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Dashboard = () => <div style={{padding: '40px'}}><h1>Дашборд</h1></div>;
const Products = () => <div style={{padding: '40px'}}><h1>Товары</h1></div>;
const Orders = () => <div style={{padding: '40px'}}><h1>Заказы</h1></div>;
const Customers = () => <div style={{padding: '40px'}}><h1>Клиенты</h1></div>;
const Analytics = () => <div style={{padding: '40px'}}><h1>Аналитика</h1></div>;
const Settings = () => <div style={{padding: '40px'}}><h1>Настройки</h1></div>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <header className="App-header">
            </header>
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;