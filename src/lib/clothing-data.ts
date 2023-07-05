import useSWR from "swr";

export type Clothing = {
  id: number;
  type: string;
  name: string;
  price: string;
  description: string;
  colors: Color[];
};

export type ColoredClothing = Omit<Clothing, "colors"> & {
  colorName: string;
  colorFile: string;
};

export type Color = {
  name: string;
  file: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function getClothings() {
  return useSWR<Clothing[]>("/clothes/data.json", fetcher);
}

export function getColoredClothings(clothings: Clothing[]) {
  return clothings.flatMap((clothing) => {
    return clothing.colors.map((color) => {
      return {
        ...clothing,
        colorName: color.name,
        colorFile: color.file,
      };
    });
  }) as ColoredClothing[];
}

export function getColoredClothing(clothing: Clothing, color: Color) {
  return {
    ...clothing,
    colorName: color.name,
    colorFile: color.file,
  } as ColoredClothing;
}