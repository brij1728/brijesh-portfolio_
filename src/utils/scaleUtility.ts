export const getScaleByScreenWidth = (width: number): number => {
  if (width >= 1280) {
    // xl screens (1280px and above)
    return 2.0;
  } else if (width >= 1024) {
    // lg screens (1024px and above)
    return 1.7;
  } else if (width >= 768) {
    // md screens (768px and above)
    return 1.2;
  } else if (width >= 640) {
    // sm screens (640px and above)
    return 1.0;
  } else {
    // xs screens (below 640px)
    return 0.7;
  }
};
