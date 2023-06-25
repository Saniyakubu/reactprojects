import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Check = ({ content }) => {
  const ContactId = useParams();
  const contents = content.find(
    (contents) => contents.id.toString() === `${ContactId.ContactId}`
  );
  console.log(contents);
  console.log(`${ContactId.ContactId}`);

  return (
    <div>
      <Link to="/">backhome</Link>
      <h1>{contents.title}</h1>
      <p>
        {contents.body}`${ContactId.ContactId}`
      </p>
    </div>
  );
};

export default Check;
