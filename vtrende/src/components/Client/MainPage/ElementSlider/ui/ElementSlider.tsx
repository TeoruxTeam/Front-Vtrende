import sliderImageIcon from "@/public/categoryBlock/advantages.svg";
import { ImageSlider } from "@/src/shared/ui/ImageSlider/ui/ImageSlider";

export const ElementSlider = () => {
  const images = [
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
    sliderImageIcon.src,
  ];

  return (
    <div>
      <ImageSlider
        images={images}
        loop={false}
        showDots={false}
        showArrows={false}
        className="custom-slider"
        // slidesPerView={6}
      />
    </div>
  );
};
