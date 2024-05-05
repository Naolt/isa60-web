import { IconChevronRight } from "@tabler/icons-react";

/* eslint-disable @next/next/no-img-element */
export default function Part3() {
  return (
    <div className="p-10 sm:p-20 bg-white flex flex-col gap-12 lg:flex-row-reverse lg:gap-24  lg:p-40 items-center">
      {/* image section */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold tracking-[8px] uppercase text-primary text-center  ">
          CONTINUED <br /> GROWTH
        </h1>
      </div>
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <h1 className="text-4xl font-bold capitalize">
          HOME-BASED MENTORING GROUPS
        </h1>
        <p className="text-gray-800">
          {`Once the training program is completed, the participants are encouraged to continue to meet in their  small groups (4-5 people), also called mentoring groups. These home-based MoH/WoD groups are  a platform for transparent fellowship and life-long relationships, where the participants hold each  other accountable, mentor and pray for one another, and challenge each other to be change agents.`}
        </p>
      </div>
    </div>
  );
}
