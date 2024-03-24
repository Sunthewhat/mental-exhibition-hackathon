import { motion } from "framer-motion";

interface Props {
  filePath: string;
  position: {
    startPosX: number;
    destPosX: number;
  }
}

export default function Bubble({
  filePath,
  position: {
    startPosX,
    destPosX
  }
}: Props) {

  return (
    <motion.img
    
      initial=
      {{
        left: startPosX,
        bottom: 0,
        opacity: 0
      }}
      
      animate=
      {{
        left: destPosX,
        top: 0,
        opacity: [0, 100, 0]
      }}
      
      transition={{ duration: 5 }}
      
      className="absolute w-10 h-10"

      src={filePath}

    ></motion.img>
  );
}
