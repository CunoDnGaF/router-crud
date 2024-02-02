import Post from './Post/Post';

const PostList = function({ list }) {
    return (
        <div className="post-list">
          {list.map((post) => (<Post post={post} key={post.id}/>))}
        </div>
    );
  }
  
  export default PostList;