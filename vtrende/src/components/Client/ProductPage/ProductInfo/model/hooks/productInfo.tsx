import {
  useAddedToFavoritesApi,
  useRemoveFromFavoritesApi,
} from "@/src/entities/Client";
import { copyTextToClipboard } from "@/src/shared/model/functions/copyToClipboard";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAddedToCart } from "../mutate/addedToCart";

export const useProductInfo = () => {
  const params = useParams();
  const { id } = params;

  const itemId = (id as string) || id[0];

  const { addedToCart } = useAddedToCart();
  const [showBigImage, setShowBigImage] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const pathname = usePathname();
  const { addedToFavorites } = useAddedToFavoritesApi({ id: Number(itemId) });
  const { removeFromFavorites } = useRemoveFromFavoritesApi({
    id: Number(itemId),
  });

  useEffect(() => {
    setCurrentUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  const handleCopyUrl = () => {
    if (currentUrl) {
      copyTextToClipboard(currentUrl);
    }
  };

  return {
    addedToCart,
    showBigImage,
    setShowBigImage,
    addedToFavorites,
    handleCopyUrl,
    removeFromFavorites,
  };
};
