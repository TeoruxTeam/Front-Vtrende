interface Photo {
  id: number;
  url: string; 
}

export interface IItem {
  id: number;
  name: string;
  description: string;
  price: number;
  old_price: number | null;
  photos: Photo[];
  category_id: number;
  subcategory_id: number;
  shop_id: number;
  shop_avatar: string
  is_favorite: boolean;
  shop_name: string;
  shop_rating: number;
  views: number;
  purchases: number;
}

export interface ICategory {
  id: number;
  name: string;
  items: IItem[];
}

export interface IItemData {
  categories: ICategory[];
}