export type IProductType = 'product' | 'service' 

interface Photo {
  id: number;
  photo_url: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  old_price: number | null;
  photos: Photo[];
  category_id: number;
  subcategory_id: number;
  shop_id: number;
  shop_avatar: string;
  is_favorite: boolean;
  shop_name: string;
  shop_rating: number;
  is_in_cart: boolean
}

export interface IProductMoreInfo
  extends Omit<IProduct, "shop_avatar" | "shop_rating"> {
  category_name: string;
  subcategory_name: string;
}

export interface ICategory {
  id: number;
  name: string;
  items: IProduct[];
}

export interface IProductData {
  categories: ICategory[] | undefined;
}

export interface IProductWithData<T> { 
  data: T
}