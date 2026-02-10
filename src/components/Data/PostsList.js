import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DataStyles.css';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Имитация задержки разная, чтобы блоки появлялись не одновременно
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await response.json();
        
        setPosts(data);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Загрузка новостей...</div>;

  return (
    <div className="data-section">
      <h2>Последние новости (LIST / DETAIL)</h2>
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <span className="post-id">#{post.id}</span>
            <span className="post-title">{post.title}</span>
            {/* Ссылка ведет на детальную страницу */}
            <Link to={`/post/${post.id}`} className="detail-btn">
              Читать подробнее →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;