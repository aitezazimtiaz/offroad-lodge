import Image from "next/image";

export default function RentalImageGrid() {
  return (
    <>
      <div className="flex flex-col max-lg:justify-center max-lg:items-center gap-5 ml-5 max-sm:ml-0">
        <Image
          src={"/assets/atv_rental1.png"}
          alt="atv_rental"
          width={620}
          height={600}
        />
        <div className="flex flex-wrap max-lg:justify-center max-lg:items-center gap-5 w-full ">
          <Image
            src={"/assets/atv_rental2.png"}
            alt="atv_rental"
            width={280}
            height={280}
            className="flex"
          />
          <Image
            src={"/assets/atv_rental3.png"}
            alt="atv_rental"
            width={280}
            height={280}
            className="flex"
          />
          <Image
            src={"/assets/atv_rental4.png"}
            alt="atv_rental"
            width={280}
            height={280}
          />
          <Image
            src={"/assets/atv_rental1.png"}
            alt="atv_rental"
            width={280}
            height={280}
          />
        </div>
      </div>
    </>
  );
}
