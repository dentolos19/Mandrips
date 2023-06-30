import useSWR from "swr";

export type Clothing = {
  id: number;
  type: string;
  name: string;
  price: number;
  description: string;
  colors: {
    name: string;
    file: string;
  }[];
};

export function getClothings() {
  const { data, error, isLoading } = useSWR("/clothes/data.json", async (url) => {
    return await fetch(url).then((res) => res.json());
  });
}