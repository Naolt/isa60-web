/* eslint-disable @next/next/no-img-element */
export default function NewAbout() {
  return (
    <div className="p-10 sm:p-20 bg-secondary  flex flex-col-reverse gap-12 lg:flex-row lg:gap-8  lg:p-40 lg:pt-20">
      {/* image section */}
      <div className="flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:min-w-[500px]">
        <div className="flex flex-col gap-8 w-full ">
          <img
            src="/assets/moh.png"
            alt="family photo"
            className="w-[380px] object-contain rounded-md "
          />
          <img
            src="/assets/wod.png"
            alt="family photo"
            className="w-96 object-contain rounded-md "
          />
        </div>
      </div>
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <span className="uppercase tracking-[8px] text-lg text-primary">
          ARISE AND SHINE
        </span>
        <h1 className="text-2xl font-bold capitalize">
          Two Movements For a Transformed Nation
        </h1>
        <p className="text-gray-800">
          The world is in desperate need of people who dare to change it – one
          heart at a time. People who take responsibility for their lives, their
          families, their work-places, and their communities. Men and women who
          are ready to make a real and lasting difference by leading lives of
          love, grace, integrity, and respect.
          <br />
          <br />
          The Church, being a vibrant fellowship of believers active
          within every sphere of society, has a unique potential to serve as a
          catalyst for this change. That’s why ISA60 International equips local
          churches to trigger two movements that can transform any nation: Men
          of Honor and Women of Dignity.
        </p>
      </div>
    </div>
  );
}
