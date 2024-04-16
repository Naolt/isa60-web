/* eslint-disable @next/next/no-img-element */
export default function OurHistory() {
  return (
    <div className="p-10 sm:p-20 bg-white flex flex-col-reverse gap-12 lg:flex-row-reverse lg:gap-24  lg:p-40">
      {/* image section */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        <img
          src="/assets/family.jpg"
          alt="family photo"
          className="object-cover rounded-md "
        />
        <img
          src="/assets/family.jpg"
          alt="family photo"
          className="object-cover rounded-md "
        />
        <img
          src="/assets/family.jpg"
          alt="family photo"
          className="object-cover rounded-md "
        />
        <img
          src="/assets/family.jpg"
          alt="family photo"
          className="object-cover rounded-md "
        />
      </div>
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 ">
        <span className="uppercase tracking-[8px] text-lg text-primary">
          story
        </span>
        <h1 className="text-2xl font-bold capitalize">our history</h1>
        <p className="text-gray-800">
          {`ISA60's story began with a powerful message from God. Inspired by
          Isaiah 60:1, Pastor Andreas Anderson, our visionary leader, felt
          called to share God's word with nations in Africa and beyond. This
          divine inspiration laid the foundation for the ministry's focus on
          personal transformation and empowering individuals to become Men of
          Honor (MoH) and Women of Dignity (WoD).`}
          <br />
          <br />
          Since its inception, ISA60 has diligently pursued its mission. Over
          2,500 individuals have received training, transforming them into MoH
          and WoD who are impacting their families, workplaces, and communities.
          This dedication to empowering ordinary people remains a core pillar of
          ISA60, paving the way for a future where nations are transformed by
          individuals living Christ-centered lives.
        </p>
      </div>
    </div>
  );
}
