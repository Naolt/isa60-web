import { IconChevronRight } from "@tabler/icons-react";

const courses = [
  "Introduction: Arise and Shine",
  "Practicing the Fear of the Lord",
  "Realizing the Complete Victory of Christ",
  "Fighting with Spiritual Weapons",
  "Opening Up to the Father's Unconditional Love",
  "Building a Character of Integrity",
  "Exercising the Power of Forgiveness",
  "Serving as Jesus Served",
  "Guarding Your Heart",
  "Christ In You – Channeling God's Love and Power",
];
/* eslint-disable @next/next/no-img-element */
export default function Part2() {
  return (
    <div className=" bg-gray-100">
      {/* header */}
      <div className="p-10 sm:p-20 sm:pb-5 w-full flex flex-col justify-center items-center gap-6">
        <span className="uppercase tracking-[8px] text-3xl text-primary">
          EQUIP
        </span>
        <h1 className="text-4xl font-bold capitalize text-center">
          THE A.G.I.R. TRAINING PROGRAM
        </h1>
      </div>
      {/* section 1 */}
      <div className=" p-10 sm:p-20 flex flex-col gap-12 lg:flex-row lg:gap-24  lg:p-40 items-center">
        {/* image section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-[8px] uppercase text-primary text-center md:text-left ">
            What is the A.G.I.R.
            <br />
            Training Program?
          </h1>
        </div>
        {/* text section section */}
        <div className="flex-1 flex flex-col gap-5 ">
          <p className="text-gray-800">
            {`After signing the MoH/WoD resolution, this ten-month program equips you to live a transformed life based on Christ-centered values. Your local church will invite you to join their MoH/WoD group for the training sessions.`}
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className=" p-10 sm:p-20 bg-primary flex flex-col gap-12 lg:flex-row-reverse lg:gap-24  lg:p-40 items-center">
        {/* image section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-[8px] uppercase text-white text-center md:text-left ">
            How Does the
            <br />
            Training Work?
          </h1>
        </div>
        {/* text section section */}
        <div className="flex-1 flex flex-col gap-5 ">
          <p className="text-gray-800">
            {`Each session lasts for about three hours and is divided into two parts:`}
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-start">
              <div className="bg-white w-6 min-h-6 max-h-6 flex items-center justify-center rounded-full overflow-hidden text-xs">
                1
              </div>
              <p className="text-gray-800">
                Part 1 (men and women together): Prayer, worship, and teaching.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-white min-w-6 min-h-6 max-h-6 flex items-center justify-center rounded-full overflow-hidden text-xs">
                2
              </div>
              <p className="text-gray-800">
                Part 2 (men and women separately): Discussions/application and
                intercession in small groups.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className=" p-10 sm:p-20 bg-white flex flex-col gap-12 lg:flex-row lg:gap-24  lg:p-40 items-center bg-">
        {/* image section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-[8px] uppercase text-primary text-center md:text-left ">
            What Happens in
            <br />
            Each Session?
          </h1>
        </div>
        {/* text section section */}
        <div className="flex-1 flex flex-col gap-5 ">
          <p className="text-gray-800">
            {`Each session lasts for about three hours and is divided into two parts:`}
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-start">
              <div className="bg-primary rounded-full w-fit h-fit">
                <IconChevronRight />
              </div>
              <p className="text-gray-800">
                {`Together Time: We'll start with prayer, worship, and teachings
                that apply to everyone.`}
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-primary rounded-full w-fit h-fit">
                <IconChevronRight />
              </div>
              <p className="text-gray-800">
                Separate Group Discussions: Men and women will have separate
                discussions to apply the learnings and pray for each other in
                small groups.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className=" p-10 sm:p-20 bg-primary flex flex-col gap-12  lg:gap-16  lg:p-40 items-center ">
        {/* image section */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold tracking-[8px] uppercase text-white text-center ">
            What Will You <br /> Learn?
          </h1>
        </div>
        {/* text section section */}
        <div className="flex-1 flex flex-col gap-8 justify-center ">
          <p className="text-gray-800 text-center line-clamp-2 text-balance">
            {`The program focuses on core values to help you grow as a person: 
Love, Grace, Integrity and Respect. and these are the ten training subjects you'll explore:`}
          </p>
          <div className="flex flex-col justify-center gap-5 md:flex-row md:justify-center md:gap-24 ">
            <div className="flex flex-col gap-5">
              {courses
                .filter((_, index) => index < 5)
                .map((content: string, index: number) => {
                  return (
                    <div className="flex gap-3 items-start" key={index}>
                      <div className="bg-white w-6 min-h-6 max-h-6 flex items-center justify-center rounded-full overflow-hidden text-xs">
                        {index + 1}
                      </div>
                      <p className="text-gray-800">{content}</p>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-col gap-5">
              {courses
                .filter((_, index) => index > 4)
                .map((content: string, index: number) => {
                  return (
                    <div className="flex gap-3 items-start" key={index}>
                      <div className="bg-white w-6 min-h-6 max-h-6 flex items-center justify-center rounded-full overflow-hidden text-xs">
                        {index + 6}
                      </div>
                      <p className="text-gray-800">{content}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
