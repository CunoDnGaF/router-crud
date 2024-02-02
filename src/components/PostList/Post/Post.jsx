import { useNavigate } from 'react-router-dom';

const Post = function({ post }) {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/posts/${post.id}`);
      };
    
    return (
        <div className="post" onClick={onClick}>
          <div className="post-header">
            <div className="post-owner-avatar"></div>
            <span className="post-owner">Name</span>
          </div>
          <div className="post-content">{post.content}</div>
        </div>
    );
}
  
  export default Post;