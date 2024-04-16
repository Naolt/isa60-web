import React from "react";

function Services() {
  return (
    <div className="p-10 flex flex-col justify-center lg:p-40 items-center gap-10 bg-gray-50">
      {/* text section section */}
      <div className="flex flex-col gap-6 justify-center py-6">
        <span className="uppercase tracking-[8px] text-lg text-primary">
          THESE ARE WHAT REPRESENTS US
        </span>
        <h1 className="text-3xl font-bold uppercase text-black text-center">
          OUR SERVICE
        </h1>
      </div>
      {/* image section */}
      <div className="flex flex-wrap items-center justify-center">
        <div className="relative">
          <img
            src="/assets/others/Moria.jpg"
            alt="Service photo"
            className="w-[295px] h-[438px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/[0.6] px-8 py-16 flex flex-col gap-10">
            <span className="text-2xl font-bold capitalize text-white">
              {/* service 1 */}
              What We Do
            </span>
            <p className="text-gray-50">
              Our training equips you to become a Man/Woman of Honor.
            </p>
          </div>
        </div>
        <div className="w-[295px] h-[438px] flex flex-col p-8 items-center gap-10 bg-gray-100">
          <span className="text-2xl font-bold text-center">
            {/* service 1 */}
            Empowering
          </span>
          <p className="text-center text-gray-900">
            ISA60&apos;s core service is equipping individuals to become Men of
            Honor (MoH) and Women of Dignity (WoD) through Christ-centered
            training programs. These programs focus on personal transformation,
            fostering values like love, integrity, and respect.
          </p>
        </div>
        {/*  service 2 */}
        <div className="w-[295px] h-[438px] flex flex-col p-8 items-center gap-10 bg-gray-200">
          <span className="text-2xl font-bold">Equipping</span>
          <p className="text-center text-gray-900">
            ISA60 recognizes the crucial role churches play in nurturing
            communities. They offer training and resources to churches,
            equipping leaders and members to become agents of transformation.
            This empowers churches to strengthen their ministries.
          </p>
        </div>
        {/* service 3 */}
        <div className="w-[295px] h-[438px] flex flex-col p-8 items-center gap-10 bg-gray-300">
          <span className="text-2xl font-bold">Building</span>
          <p className="text-center text-gray-900">
            ISA60&apos;s vision extends beyond individuals and churches. They
            understand the importance of fostering strong, thriving communities.
            Through various initiatives and partnerships, they work to address
            community needs and promote positive social values.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
