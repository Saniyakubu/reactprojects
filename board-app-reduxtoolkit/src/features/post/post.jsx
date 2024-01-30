import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import { useState, useEffect } from 'react';
import { NewPosts } from './postSlice';
import { getAllUsers, fetchUsers } from './usersSlice';
const Post = () => {
  const [newContent, setNewContent] = useState('');
  const [newComment, setNewComment] = useState('');

  const posts = useSelector(selectAllPosts);
  const users = useSelector(getAllUsers);
  console.log(users);

  const dispatch = useDispatch();

  const values = Boolean(newComment) && Boolean(newContent);
  console.log(values);
  const displayPost = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.content}</h3>
        <p>{post.comments}</p>
      </article>
    );
  });
  const addNewPost = () => {
    if (!newComment && !newContent) {
      return;
    }
    dispatch(NewPosts(newContent, newComment));
    setNewContent('');
    setNewComment('');
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <br />
        <button type="button" onClick={addNewPost} disabled={!values}>
          submit
        </button>
      </div>
      {displayPost}
    </div>
  );
};

export default Post;
