import Image from "next/image";
import React from "react";

const Bubble = () => {
  return (
    <>
      <div className="absolute block lg:hidden bottom-[-12em] w-full h-full z-0">
        <Image
          src="/assets/game/backgrounds/bubble_md.png "
          alt="bubble"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover z-0"
        />
      </div>
      <div className="absolute hidden lg:block bottom-[-12em] w-full h-full z-0">
        <Image
          src="/assets/game/backgrounds/bubble_lg.png "
          alt="bubble"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover z-0"
        />
      </div>
    </>
  );
};

export default Bubble;
