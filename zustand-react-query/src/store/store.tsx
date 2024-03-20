import { create } from "zustand";

export interface carArrayType {
  cars: any;
  addCarsToArray: any;
}

const useCarArray = create<carArrayType>((set) => ({
  cars: [],
  addCarsToArray: (car: any) => {
    set((state) => ({ cars: (state.cars = car) }));
  },
}));

// interface CounterType {
//   counter: number;
//   usersList: [];
//   increment: () => void;
//   decrement: () => void;
//   getUserList: () => any;
// }

// const useCounter = create<CounterType>((set) => ({
//   counter: 0,
//   usersList: [],
//   increment: () => {
//     set((state) => ({ counter: state.counter + 1 }));
//   },
//   decrement: () => {
//     set((state) => ({ counter: state.counter - 1 }));
//   },

//   getUserList: async () => {
//     const resData = await getData();
//     console.log(resData);
//     set((state) => ({ usersList: (state.usersList = resData) }));
//   },
// }));

export default useCarArray;
