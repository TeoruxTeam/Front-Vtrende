import { IProductType } from "./productTypes";

export interface Categories {
  id: number;
  name: string;
  category_id: number;
  type: IProductType;
}

export interface ICategoriesWithData {
  data: Categories[];
}
