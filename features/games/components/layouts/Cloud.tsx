import Image from "next/image";
import React from "react";

const Cloud = () => {
  return (
    <>
      <div className="fixed block xs:hidden top-[-5.5em] h-2/5 w-full z-20">
        <Image
          src="/assets/game/backgrounds/double-cloud.png "
          alt="double_cloud"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover z-20"
        />
      </div>
      <div className="fixed hidden h-[40%] w-full xs:block z-20">
        <Image
          src="/assets/game/backgrounds/double-cloud-large.png"
          alt="double_cloud_large"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={100}
          height={100}
          className="z-20"
        />
      </div>
    </>
  );
};

export default Cloud;
