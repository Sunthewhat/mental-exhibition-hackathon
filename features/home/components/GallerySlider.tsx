import GalleryItem from "./GalleryItem";
import {
  animate,
  AnimationPlaybackControls,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import gallerys from "@/constants/gallerys";

const GallerySlider = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const control = useRef<AnimationPlaybackControls>(null!);

  useEffect(() => {
    if (!width) return;
    const finalPosition = -width / 2 - 14;

    control.current = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      control.current.stop();
    };
  }, [width, xTranslation]);

  return (
    <main
      id="gallery"
      className="py-8 mt-[-2rem] overflow-hidden h-auto min-w-[200px] "
    >
      <motion.div
        className="inline-flex gap-4 overflow-hidden items-center justify-center"
        style={{ x: xTranslation }}
        ref={ref}
      >
        {gallerys.map((item, idx) => (
          <GalleryItem gallery={item} index={idx} key={idx} firstDiv={true} />
        ))}
        {gallerys.map((item, idx) => (
          <GalleryItem gallery={item} index={idx} key={idx} firstDiv={false} />
        ))}
      </motion.div>
    </main>
  );
};

export default GallerySlider;
