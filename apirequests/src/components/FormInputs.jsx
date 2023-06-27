import React from 'react';
import { DataContext } from '../propContext';
import { useContext } from 'react';
const FormInputs = () => {
  const {
    name,
    setName,
    age,
    setAge,
    jobtitle,
    setJobtitle,
    country,
    setCountry,
    newData,
  } = useContext(DataContext);

  console.log(name);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h1>hello</h1>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        placeholder="name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        name="age"
        placeholder="age"
      />
      <input
        type="text"
        value={jobtitle}
        onChange={(e) => setJobtitle(e.target.value)}
        name="jobtitle"
        placeholder="jobtitle"
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        name="country"
        placeholder="country"
      />
      <button onClick={newData}>submit</button>
    </form>
  );
};

export default FormInputs;
