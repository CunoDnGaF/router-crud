import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewPost = function({ url }) {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    
    const onClose = () => navigate('/');

    useEffect(() => {
        getPost();
      }, []);
    
      const getPost = () => {
        fetch(`${url}posts/${params.id}`)
          .then((response) => response.json())
          .then((result) => {
            setPost(result.post);
          });
      };

      const onDelete = () => {
        fetch(`${url}posts/${params.id}`, {
          method: "DELETE",
        }).then(onClose());
      };

      const onEdit = () => {
        navigate(`/posts/edit/${post.id}`);
      };
      

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-owner-avatar"></div>
                <span className="post-owner">Name</span>
            </div>
            <div className="post-content">{post.content}</div>
            <div className="post-footer">
                <button className="post-btn edit" onClick={onEdit}>Редактировать</button>
                <button className="post-btn remove" onClick={onDelete}>Удалить</button>
            </div>
        </div>
    );
}

export default ViewPost;