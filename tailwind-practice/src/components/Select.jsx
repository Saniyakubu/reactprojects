import React from 'react';

const Select = ({ SelectWorkerGroup, setSelectWorkerGroup }) => {
  return (
    <div>
      <select
        name="selectMenu"
        className="border-4 rounded-2xl border-black mb-8"
        value={SelectWorkerGroup}
        onChange={(e) => setSelectWorkerGroup(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Development">Development</option>
        <option value="Data Science">Data Science</option>
        <option value="Design">Design</option>
        <option value="Management">Management</option>
      </select>
    </div>
  );
};

export default Select;
