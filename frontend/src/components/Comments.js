import React from 'react';

//import './header.css';

import NewComment from './NewComment';

export default function Comments(props) {
  return (
    <>
      {props.comments.map(comment => (
        <div key={comment._id}>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
      <NewComment 
        idComment={props.idPost}
      />
    </>
  );
}