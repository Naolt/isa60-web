import Image from "next/image";
import React from "react";

function Impact() {
  return (
    <div className="p-10 sm:p-20  flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-8  lg:p-40 bg-primary">
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <span className="uppercase tracking-[8px] text-lg text-black">
          Our Impact
        </span>
        <h1 className="text-3xl font-bold capitalize text-white">
          Transforming Lives Across Africa
        </h1>
        <p className="text-gray-800">
          Since its inception, ISA60 has empowered over 2,500 ordinary men and
          women to become Men of Honor (MoH) and Women of Dignity (WoD). These
          individuals are leading positive change within their families,
          workplaces, and communities.
        </p>
      </div>
      {/* image section */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/assets/Country.svg"
          alt="Country photo"
          objectFit="cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Impact;
