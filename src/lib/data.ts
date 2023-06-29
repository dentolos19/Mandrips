import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export type Clothing = {
  id: number;
  type: string;
  name: string;
  price: number;
  description: string;
  colors: {
    name: string;
    file: string;
  };
};

export function getClothings() {
  const { data, error, isLoading } = useSWR("/clothes/data.json", fetcher);
}