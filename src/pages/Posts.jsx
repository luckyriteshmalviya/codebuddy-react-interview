import { useEffect, useState } from 'react';
import './Posts.css';

const Posts = () => {
  const [post, setPost] = useState('');

  async function getPost() {
    const postUrl = 'https://codebuddy.review/posts';
    await fetch(postUrl)
      .then(res => res.json())
      .then(data => setPost(data.data.posts));
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <div className="post-container">
        {post &&
          post.map(item => (
            <div className="post" key={item.id}>
              <img className="post-image" src={item.image} alt="post" />
              <div className="post-firstName detail">
                <b>First Name :- </b>
                {item.firstName}
              </div>
              <div className="post-lastName detail">
                <b>Last Name :-</b> {item.lastName}
              </div>
              <div className="post-writeup">
                <b>Writeup :-</b>
                {item.writeup}
              </div>
              <img className="post-avatar" src={item.avatar} alt="avatar" />
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
