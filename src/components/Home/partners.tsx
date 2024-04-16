import Link from "next/link";
import React from "react";

function Partners() {
  return (
    <div className="p-10 sm:p-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24  lg:p-40 bg-primary">
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <h1 className="uppercase tracking-[8px] text-lg text-black">
          Our Partners
        </h1>
        <h1 className="text-3xl font-bold capitalize text-white">
          Stronger Together: Building Impactful Partnerships
        </h1>
        <p className="text-gray-800 text-pretty">
          We believe collaboration is key to creating lasting change. We partner
          with organizations that share our values and commitment to empowering
          individuals and strengthening communities across Africa.
        </p>
      </div>
      {/* image section */}
      <div className="flex-1">
        <Link href={"https://www.elnetfoundation.com/"} target="_blank">
          <img
            src="/assets/partners/logoselfound.webp"
            alt="Partner photo"
            className="w-64 grayscale hover:grayscale-0 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}

export default Partners;
