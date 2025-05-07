"use client";
import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./ImageSlider.module.scss";

interface ImageSliderProps {
  images: string[] | { url: string; alt?: string }[];
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const ImageSlider: FC<ImageSliderProps> = ({
  images,
  loop = true,
  showDots = true,
  showArrows = true,
  className,
  imageWidth = 165,
  imageHeight = 105,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, dragFree: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
  }, [emblaApi, onInit, onSelect]);

  const normalizedImages = images.map((image) =>
    typeof image === "string" ? { url: image, alt: "Slide image" } : image
  );

  return (
    <div className={classNames(styles.sliderContainer, className)}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {normalizedImages.map((image, index) => (
            <div className={styles.emblaSlide} key={index}>
              <Image
                src={image.url}
                alt={image.alt || `Slide ${index + 1}`}
                className={styles.emblaSlideImage}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className={classNames(styles.arrow, styles.arrowPrev)}
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className={classNames(styles.arrow, styles.arrowNext)}
            onClick={scrollNext}
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={classNames(styles.dot, {
                [styles.dotActive]: index === selectedIndex,
              })}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
