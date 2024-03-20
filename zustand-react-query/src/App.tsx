import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import cars from "./api/Data";
import useCarArray from "./store/store";
import { useEffect } from "react";

const carsList = [
  {
    id: 1,
    model: "Toyota Camry",
  },
  {
    id: 2,
    model: "Honda Civic",
  },
  {
    id: 3,
    model: "Ford Mustang",
  },
  {
    id: 4,
    model: "Chevrolet Malibu",
  },
  {
    id: 5,
    model: "Nissan Altima",
  },
];

function App() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["cars"],

    queryFn: async (): Promise<any> => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return carsList;
    },
  });

  const carStore = useCarArray((state) => state.addCarsToArray);
  const cars = useCarArray((state) => state.cars);

  useEffect(() => {
    carStore(data);
  }, [data]);

  console.log("zustand", cars);
  console.log("carlistss", carsList);
  const mutate = useMutation({
    mutationFn: async (title: string): Promise<any> => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const newItem = {
        id: (carsList.length + 1) as number,
        model: title,
      };

      return carsList.push(newItem);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  return (
    <div>
      <h1>hello</h1>
      <div>
        {cars &&
          cars.map((car: any, index: number) => {
            return <h1 key={index}>{car.model}</h1>;
          })}
      </div>
      <button onClick={() => mutate.mutate("teslaaaa")}>add</button>
    </div>
  );
}

export default App;
