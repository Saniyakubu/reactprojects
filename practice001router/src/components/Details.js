import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Details = ({ arrayObject, deleteItems }) => {
  const id = useParams();
  const getId = arrayObject.find((itemId) => itemId.id.toString() === id.id);
  console.log(getId);

  return (
    <main>
      {getId && (
        <>
          <h1>{getId.title}</h1>
          <p>
            {getId.body} post {getId.id}
          </p>
          <button onClick={() => deleteItems(getId.id)}>delete</button>
        </>
      )}
      {!getId && (
        <>
          <h1>no post</h1>
          <Link to="/">go back to home</Link>
        </>
      )}
    </main>
  );
};

export default Details;
