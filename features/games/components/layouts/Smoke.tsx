import Image from "next/image";

const Smoke = () => {
  return (
    <>
      <div className="fixed block xs:hidden top-[5rem] right-0 h-1/5 w-3/4">
        <Image
          src="/assets/game/backgrounds/ellipse_sm.png "
          alt="ellipse_md"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={100}
          height={100}
        />
      </div>
      <div className="fixed hidden xs:block top-[2em] right-0 h-2/5 w-1/2 lg:w-2/5 lg:top-[6em]">
        <Image
          src="/assets/game/backgrounds/ellipse_md.png "
          alt="ellipse_md"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={100}
          height={100}
        />
      </div>
      <div className="fixed hidden lg:block left-[20em] top-[-27em] w-2/5">
        <Image
          src="/assets/game/backgrounds/ellipse_md.png "
          alt="ellipse_md"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={100}
          height={100}
        />
      </div>

      <div
        className="fixed hidden xs:block bottom-[-20%] h-1/2 w-1/3 tablet:w-1/2 
       "
      >
        <Image
          src="/assets/game/backgrounds/ellipse_bottom.png "
          alt="ellipse_md"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </>
  );
};

export default Smoke;
