import React from 'react';

const Post = ({
  submitNewItems,
  newItems,
  newBody,
  setNewItems,
  setNewBody,
}) => {
  return (
    <form onSubmit={submitNewItems}>
      <input
        id="inputtext"
        type="text"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <br />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      ></textarea>
      <br />
      <button>submit</button>
    </form>
  );
};

export default Post;
