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