import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const AddPost = function({ url }) {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const onClose = () => navigate('/');

  const onChange = (e) => {
    const { target } = e;
    setContent(target.value);
  };

  const onSubmit = () => {
    fetch(`${url}posts`, {
      method: "POST",
      body: JSON.stringify({ content: content, id: 0 }),
    }).then(onClose());
  };

  return (
    <div className="add-post-module">
      <textarea
        className="add-post-input"
        value={content}
        onChange={onChange}
      />
      <div className="post-footer">
        <button className="post-btn add" onClick={onSubmit}>Опубликовать</button>
        <button className="post-btn close" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
  }
  
  export default AddPost;