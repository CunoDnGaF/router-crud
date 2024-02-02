import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditPost = function({ url }) {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [content, setContent] = useState('');

    useEffect(() => {
        getPost();
      }, []);

      const onClose = () => navigate('/');
    
      const getPost = () => {
        fetch(`${url}posts/${params.id}`)
          .then((response) => response.json())
          .then((result) => {
            setPost(result.post);
          });
      };

      const onSubmit = () => {
        fetch(`${url}posts/${params.id}`, {
          method: "PUT",
          body: JSON.stringify({content: content}),
        }).then(onClose());
      };

      const onChange = (e) => {
        const { target } = e;
        setContent(target.value);
      };

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-owner-avatar"></div>
                <span className="post-owner">Name</span>
            </div>
            <textarea
              className="edit-post-input"
              defaultValue={post.content}
              value={content}
              onChange={onChange}
            />
            <div className="post-footer">
                <button className="post-btn ok" onClick={onSubmit}>Принять изменения</button>
            </div>
        </div>
    );
}

export default EditPost;