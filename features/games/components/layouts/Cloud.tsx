import Image from "next/image";
import React from "react";

const Cloud = () => {
  return (
    <>
      <div className="absolute block xs:hidden top-[-5.5em] h-2/5 w-full">
        <Image
          src="/assets/game/backgrounds/double-cloud.png "
          alt="double_cloud"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute hidden h-[40%] w-full xs:block">
        <Image
          src="/assets/game/backgrounds/double-cloud-large.png "
          alt="double_cloud_large"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default Cloud;
