import { createContext } from "react";

export default interface IheadPhones {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

interface IProductContext {
  headPhones: IheadPhones[];
  wireless: IheadPhones[];
  selectedData: number[];
  addSelectedData: (productId: number) => void;
  deleteSelectedData:(productId: number) => void;
}

export const ProductContext = createContext<IProductContext>({
  headPhones: [],
  wireless: [],
  selectedData: [],
  addSelectedData: () => {},
  deleteSelectedData: () => {},
});
