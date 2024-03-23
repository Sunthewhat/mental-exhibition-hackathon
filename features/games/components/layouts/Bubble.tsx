import Image from "next/image";
import React from "react";

const Bubble = () => {
  return (
    <>
      <div className="fixed block xs:hidden bottom-0 w-screen h-2/5 z-40">
        <Image
          src="/assets/game/backgrounds/bubble_md.png "
          alt="bubble"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover z-40 "
        />
      </div>
      <div className="fixed hidden xs:block w-screen h-screen z-40">
        <Image
          src="/assets/game/backgrounds/bubble_lg.png "
          alt="bubble"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover z-40"
        />
      </div>
    </>
  );
};

export default Bubble;
