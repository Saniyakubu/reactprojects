import './App.css';
import employees from './components/Data';

import Select from './components/Select';
import Filterbtn from './components/Filterbtn';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [workers, setWorkers] = useState(employees);
  const [SelectWorkerGroup, setSelectWorkerGroup] = useState('All');
  console.log(SelectWorkerGroup);

  function filterItems() {
    if (SelectWorkerGroup === 'All') {
      setWorkers(employees);
      console.log(employees);
    } else {
      const groups = employees.filter(
        (items) => items.groupName === SelectWorkerGroup
      );
      setWorkers(groups);
      console.log(groups);
    }
  }

  function updatedGroup(event) {
    const addRemoveMember = workers.map((items) =>
      items.id === parseInt(event.currentTarget.id)
        ? items.groupName === SelectWorkerGroup
          ? { ...items, groupName: '' }
          : { ...items, groupName: SelectWorkerGroup }
        : items
    );
    console.log(event.currentTarget.id);
    localStorage.setItem('workers', JSON.stringify(addRemoveMember));
    setWorkers(addRemoveMember);
  }

  return (
    <div className="container mx-auto p-8">
      <Select
        SelectWorkerGroup={SelectWorkerGroup}
        setSelectWorkerGroup={setSelectWorkerGroup}
      />

      <Filterbtn filterItems={filterItems} />

      <Main
        workers={workers}
        setWorkers={setWorkers}
        SelectWorkerGroup={SelectWorkerGroup}
        updatedGroup={updatedGroup}
      />
    </div>
  );
}

export default App;
