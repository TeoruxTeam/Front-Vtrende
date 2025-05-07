import { CatalogBlockInfo } from "../CatalogBlockInfo/ui/CatalogBlockInfo";
import { CategoryBlock } from "../CategoryBlock/ui/CategoryBlock";
import { ElementSlider } from "../ElementSlider/ui/ElementSlider";

export const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        width: "100%",
        margin: '25px 0'
      }}
    >
      <CategoryBlock />
      <ElementSlider />
      <CatalogBlockInfo />
    </div>
  );
};
