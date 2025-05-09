import { ESocialLinks } from "../../SocialLinks/model/types/socialLinks";

export interface ISocials {
  social_type: ESocialLinks;
  value: string;
}

export interface ICity {
  id: number;
  name: string;
  lat: number;
  lng: number;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: number;
  population_proper: number;
}

export interface ISchedule {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface IShopInfo {
  id: number;
  email: string;
  avatar: string;
  phone_number: string;
  is_shop: boolean;
  verified: boolean;
  created_at: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  lat: number;
  lng: number;
  background_image: string;
  schedule: ISchedule;
  socials: ISocials[];
  city: ICity;
}