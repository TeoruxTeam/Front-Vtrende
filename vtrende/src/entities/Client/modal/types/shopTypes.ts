import { ESocialLinks } from "../../SocialLinks/model/types/socialLinks";

export interface ISocials {
  social_type: ESocialLinks;
  value: string;
}

export interface IShopInfo {
  id: number;
  name: string;
  description: string;
  avatar: string;
  created_at: string;
  rating: number;
  socials: ISocials[];
}
