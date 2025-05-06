import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Интерфейс для состояния пользователя
interface UserState {
  id: number;
  email: string;
  name: string;
  description: string;
  is_shop: boolean;
  verified: boolean;
  created_at: string;
  iin_bin: string;
  avatar: string;

  // Методы для обновления каждого поля
  setId: (id: number) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setIsShop: (is_shop: boolean) => void;
  setVerified: (verified: boolean) => void;
  setCreatedAt: (created_at: string) => void;
  setIinBin: (iin_bin: string) => void;
  setAvatar: (avatar: string) => void;
}

// Создаём стор с персистентностью
export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      // Начальные значения
      id: 0,
      email: "",
      name: "",
      description: "",
      is_shop: false,
      verified: false,
      created_at: "",
      iin_bin: "",
      avatar: "",

      // Методы для обновления каждого поля
      setId: (id) => set({ id }),
      setEmail: (email) => set({ email }),
      setName: (name) => set({ name }),
      setDescription: (description) => set({ description }),
      setIsShop: (is_shop) => set({ is_shop }),
      setVerified: (verified) => set({ verified }),
      setCreatedAt: (created_at) => set({ created_at }),
      setIinBin: (iin_bin) => set({ iin_bin }),
      setAvatar: (avatar) => set({ avatar }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);