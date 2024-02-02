import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PostList from '../PostList/PostList'

const HomePage = function({ url }) {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  const onAdd = () => {
    navigate('/posts/new');
  };

  const getPosts = () => {
    fetch(`${url}posts`)
      .then((response) => response.json())
      .then((result) => {
        setPostList(result);
      });
  };

  return (
    <div className="home">
      <button className="add-btn" onClick={onAdd}>Создать пост</button>
      {postList ? <PostList list={postList} /> : null}
    </div>
  );
}

export default HomePage;