import React, { useState, useEffect } from 'react';
import './DataStyles.css'; // Общий CSS создадим ниже

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Имитация задержки (1.5 секунды)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 2. Запрос к "фейковому" JSON API
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=4');
        const data = await response.json();
        
        setUsers(data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Загрузка пользователей...</div>;

  return (
    <div className="data-section">
      <h2>Наши топ-клиенты (API Data)</h2>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p className="email">{user.email}</p>
            <p className="company">{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;