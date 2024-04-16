/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="p-10 sm:p-20 bg-secondary flex flex-col-reverse gap-12 lg:flex-row lg:gap-8  lg:p-40">
      {/* image section */}
      <div className="flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:min-w-[500px]">
        <img
          src="/assets/family.jpg"
          alt="family photo"
          className="w-[191px] h-[180px] object-cover rounded-md "
        />
        <div className="flex flex-col gap-2 w-full">
          <img
            src="/assets/family.jpg"
            alt="family photo"
            className="w-full  h-[202px] md:w-[262px] object-cover rounded-md "
          />
          <img
            src="/assets/family.jpg"
            alt="family photo"
            className="w-full  h-[180px] sm:w-[191px] object-cover rounded-md "
          />
        </div>
      </div>
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <span className="uppercase tracking-[8px] text-lg text-primary">
          about us
        </span>
        <h1 className="text-2xl font-bold capitalize">Who We Are</h1>
        <p className="text-gray-800">
          ISA60 International is a unique interdenominational, non-profit
          Christian ministry. We empower individuals through personal
          transformation, helping them become Men of Honor (MoH) and Women of
          Dignity (WoD). This transformative approach equips them to lead
          Christ-centered lives of love, grace, integrity, and respect,
          impacting their families, workplaces, and communities.
          <br />
          <br />
          Our vision is to see nations transformed by ordinary men and women
          empowered by God. We partner with local churches and ministries,
          providing them with the tools and resources to equip their members and
          fulfill their calling as MoH and WoD.
        </p>
      </div>
    </div>
  );
}
