import React, { useState } from 'react';
import { useEffect } from 'react';
import PostService from '../../../services/postService';
import './add-post.css'

function AddPostForm() {
  
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(0);
  const [userId, setUserId] = useState(78);
  const postService = new PostService();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    let categoryId;
    switch (category) {
      case 'teachers':
        categoryId = 1;
        break;
      case 'blog':
        categoryId = 2;
        break;
      case 'events':
        categoryId = 3;
        break;
      default:
        categoryId = null;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category_id', categoryId);
    try {
      const response = await postService.createPost(formData);
      console.log(response);
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  };

  return (
    <div className='form-post-wrapper'>
    <form action={handleSubmit}>
      <input type="text" placeholder="Назва" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Контент" value={content} onChange={(e) => setContent(e.target.value)} />
        <label htmlFor="category">Категорія</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="teachers">Виклкдачі</option>
          <option value="blog">Блок</option>
          <option value="events">Оголошення</option>
          <option value="updates">Оновлення</option>
        </select>
      <input type="file" onChange={handleFileChange} />
      <button onClick={(e) => handleSubmit("events")}>Створити пост</button>
    </form>
    </div>
  );
}

export default AddPostForm;
