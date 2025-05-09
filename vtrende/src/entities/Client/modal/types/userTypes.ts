export interface IUser {
  id: number;
  email: string;
  name: string;
  description: string;
  is_shop: boolean;
  verified: boolean;
  created_at: string;
  iin_bin: string;
  avatar: string;
  background_image: string;
  lat: number | null;
  lng: number | null;
  rating: number
  phone_number: number
}
