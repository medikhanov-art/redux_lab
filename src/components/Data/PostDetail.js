import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DataStyles.css';

const PostDetail = () => {
  const { id } = useParams(); // Берем ID из URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        // Задержка для реалистичности перехода
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        
        setPost(data);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <div className="loading-screen">Загрузка деталей...</div>;

  if (!post) return <div>Пост не найден</div>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Вернуться назад</Link>
      <div className="detail-card">
        <h1>{post.title}</h1>
        <div className="detail-body">
          <p>{post.body}</p>
          <hr />
          <p>
            <strong>Lorem ipsum dolor sit amet.</strong> Это детальное описание, 
            которое подгрузилось по уникальному ID: {post.id}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;