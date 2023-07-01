import useSWR from "swr";

export type Clothing = {
  id: number;
  type: string;
  name: string;
  price: string;
  description: string;
  colors: Color[];
};

export type Color = {
  name: string;
  file: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function getClothings() {
  return useSWR<Clothing[]>("/clothes/data.json", fetcher);
}