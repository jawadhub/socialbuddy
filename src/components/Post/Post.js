import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
  const {id, title} = props.post;
  const history = useHistory();
  const showComments = id => {
    const url = `post/${id}`;
    history.push(url);
  }

  return (
    <div>
      <h3>ID : {id}</h3>
      <p>{title}</p>
      <button onClick={() => showComments(id)}>show comments</button>
    </div>
  );
};

export default Post;