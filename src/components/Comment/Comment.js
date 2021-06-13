import React from 'react';

const Comment = (props) => {
  const {email, body} = props.comment;
  return (
    <div>
      <h2>Email : {email}</h2>
      <p>Body : {body}</p>
    </div>
  );
};

export default Comment;