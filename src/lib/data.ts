import useSWR from "swr";

export type Clothing = {
  id: number;
  type: string;
  name: string;
  price: string;
  description: string;
  colors: {
    name: string;
    file: string;
  }[];
};

export function getClothings() {
  return useSWR("/clothes/data.json", async (url) => {
    return await fetch(url).then((res) => res.json());
  }) as { data: Clothing[]; isLoading: boolean };
}

export function getClothing(id: number) {
  return useSWR("/clothes/data.json", async (url) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data.find((item: Clothing) => item.id === id);
      });
  }) as { data: Clothing; isLoading: boolean };
}