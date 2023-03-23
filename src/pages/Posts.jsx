/*eslint-disable*/
import { useEffect, useState } from 'react';

const Posts = () => {
  const [post, setPost] = useState('');

  async function callAPi() {
    const postUrl = 'https://codebuddy.review/posts';
    const getPost = await fetch(postUrl)
      .then(res => res.json())
      .then(data => setPost(data.data.posts));
  }

  useEffect(() => {
    callAPi();
  }, []);

  console.log('products', post);
  return (
    <div
      className="post-container"
      style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr 1fr' }}
    >
      {post &&
        post.map(item => {
          return (
            <div className="post" key={item.id} style={{ border: '1px solid' }}>
              <img className="sample-image" width="150px" src={item.image} alt="product" />
              <div className="sample-brand">{item.firstName}</div>
              <div className="sample-brand">{item.lastName}</div>
              <div className="sample-brand">{item.writeup}</div>
              <img className="sample-image" width="100px" src={item.avatar} alt="avatar" />
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
