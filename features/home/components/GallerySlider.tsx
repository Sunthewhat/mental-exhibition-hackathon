import GalleryItem from "./GalleryItem";
import {
  animate,
  AnimationPlaybackControls,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import { galleryData } from "@/constants/galleryData";

const GallerySlider = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation1 = useMotionValue(0);
  const xTranslation2 = useMotionValue(0);
  
  const control1 = useRef<AnimationPlaybackControls>(null!);
  const control2 = useRef<AnimationPlaybackControls>(null!);
  
  const animateDuration = 25;

  useEffect(() => {
    if (!width) return;
    const finalPosition = -width / 2 - 14;

    control1.current = animate(xTranslation1, [0, finalPosition], {
      ease: "linear",
      duration: animateDuration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    control2.current = animate(xTranslation2, [0, finalPosition], {
      ease: "linear",
      duration: animateDuration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      control1.current.stop();
    };
  }, [width, xTranslation1, xTranslation2]);

  return (
    <main
      id="gallery"
      className="py-8 mt-[-2rem] overflow-hidden h-auto min-w-[200px] "
    >
      <div className="flex gap-4">
      <motion.div
        className="inline-flex gap-4 overflow-hidden items-center justify-center"
        style={{ x: xTranslation1 }}
        ref={ref}
      >
        {galleryData.map((item, idx) => (
          <GalleryItem gallery={item} index={idx} key={idx} firstDiv={true} />
        ))}
      </motion.div>

      <motion.div
        className="inline-flex gap-4 overflow-hidden items-center justify-center"
        style={{ x: xTranslation2 }}
        ref={ref}
      >
        {galleryData.map((item, idx) => (
          <GalleryItem gallery={item} index={idx} key={idx} firstDiv={true} />
        ))}
      </motion.div>
      </div>
    </main>
  );
};

export default GallerySlider;