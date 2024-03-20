import axios from "axios";
import cars from "../api/Data";

export const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const resData = await res.data;
  return await resData;
};

export const posData = async (data: any) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    data
  );
  console.log(data);
  console.log(res);
};

let CarArray: any;
export const getCarList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  CarArray = cars;
  return CarArray;
};

export const AddToCarList = async (model: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const newCar = {
    id: CarArray.length + 1,
    model,
  };
  CarArray.push(newCar);
  // console.log(CarArray);
  // useCarArray.setState((prev: carArrayType) => ({
  //   cars: new Set(prev.cars).add(newCar),
  // }));
  // console.log(useCarArray)
  // localStorage.setItem("cars", JSON.stringify(CarArray));
  return newCar;
};
