import React, { createContext } from 'react';
import { useState, useEffect } from 'react';

export const DataContext = createContext('');

export const PropProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  const [country, setCountry] = useState('');
  const [Data, setData] = useState([]);
  console.log(Data);
  async function fetchData() {
    try {
      const res = await fetch('http://localhost:5000/posts');
      if (!res.ok) throw new Error('refresh');
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function newData() {
    if (name === '' || age === '' || jobtitle === '' || country === '') {
      alert('fill the inputs');
      return;
    }
    const id = Data[Data.length - 1].id ? Data[Data.length - 1].id + 1 : 1;
    const newObject = {
      id,
      name: name,
      age: age,
      jobtitle: jobtitle,
      country: country,
    };

    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newObject),
    });

    const newData = await res.json();
    console.log(newObject);

    setData([...Data, newData]);
    setName('');
    setAge('');
    setCountry('');
    setJobtitle('');
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        Data,
        setData,
        name,
        setName,
        age,
        setAge,
        jobtitle,
        setJobtitle,
        country,
        setCountry,
        newData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
