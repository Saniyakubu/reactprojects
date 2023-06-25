import React from 'react';
import Male from '../assets/male.png';
import Female from '../assets/female.png';
const Main = ({ workers, setWorkers, SelectWorkerGroup, updatedGroup }) => {
  return (
    <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 center justify-items-center">
      {workers.map((worker) => {
        return (
          <div
            id={worker.id}
            key={worker.id}
            className={`w-64 bg-yellow-200 flex flex-col justify-between justify-items-center  ${
              SelectWorkerGroup === worker.groupName
                ? 'border-4 border-yellow-700'
                : null
            }`}
            onClick={updatedGroup}
          >
            <div className=" max-w-full">
              {worker.Gender === 'Male' ? (
                <img className=" max-w-full block" src={Male} alt="Male" />
              ) : (
                <img className="max-w-full block" src={Female} alt="Female" />
              )}
            </div>
            <div className="bg-slate-100 max-w-full p-5">
              <h1 className="font-bold text-md">
                full Name: {` ${worker.fullName}`}
              </h1>
              <p>Designation: {` ${worker.Designation}`}</p>
              <p>Gender: {` ${worker.Gender}`}</p>
              <div>
                {SelectWorkerGroup === worker.groupName && (
                  <h1 className="font-bold text-lg">
                    Team: {worker.groupName}
                  </h1>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
