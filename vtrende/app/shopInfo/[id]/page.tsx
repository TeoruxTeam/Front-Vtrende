import { ShopPage } from "@/src/components/Client/ShopPage";
import { mockShopInfo } from "@/src/entities/Client/ProductCard/model/mutate/ProductInfo/getShopInfo";

const page = ({ params }: { params: { id: string } }) => {
  const shop_id = Number(params.id);

  // const { data: shopInfo, isLoading } = useGetShopInfoQuery({
  //   shop_id: shop_id,
  // });

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (!shopInfo) {
  //   return null;
  // }

  return <ShopPage shopInfo={mockShopInfo} />;
};

export default page;
