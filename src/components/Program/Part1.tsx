import { IconChevronRight } from "@tabler/icons-react";

/* eslint-disable @next/next/no-img-element */
export default function Part1() {
  return (
    <div className="p-10 sm:p-20 bg-white flex flex-col gap-12 lg:flex-row lg:gap-24  lg:p-40 items-center">
      {/* image section */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold tracking-[8px] uppercase text-primary ">
          MOBILIZE &
          <br />
          CHALLENGE
        </h1>
      </div>
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <h1 className="text-4xl font-bold capitalize ">Revival Meetings</h1>
        <p className="text-gray-800">
          {`The first step is to invite men and women in every city and village to revival meetings, arranged by  the local churches, in order to:`}
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-start">
            <div className="bg-primary rounded-full w-fit h-fit">
              <IconChevronRight />
            </div>
            <p className="text-gray-800">
              Share the message to the nation (Isaiah 60:1; Deuteronomy 30:19)
              and the key values.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-primary rounded-full w-fit h-fit">
              <IconChevronRight />
            </div>
            <p className="text-gray-800">Present the Gospel.</p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-primary rounded-full w-fit h-fit">
              <IconChevronRight />
            </div>
            <p className="text-gray-800">
              Challenge everyone to accept Christ as Savior and Lord and to sign
              the MoH/WoD resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
