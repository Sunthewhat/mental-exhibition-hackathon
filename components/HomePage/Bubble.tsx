import { motion } from "framer-motion";

interface Props {
  filePath: string;
  initialPos: {
    posX: number;
  };
}

export default function Bubble({
  filePath,
  initialPos: { posX },
}: Props) {

  const randNum = Math.random();

  const destX = randNum < 0.5 ? posX + 100 : posX - 100;

  return (
    <motion.img
    
      initial=
      {{
        left: posX,
        bottom: 0,
        opacity: 0
      }}
      
      animate=
      {{
        left: destX,
        top: 0,
        opacity: [0, 100, 0]
      }}
      
      transition={{ duration: 5 }}
      
      className="absolute w-10 h-10"

      src={filePath}

    ></motion.img>
  );
}
