import React from "react";

function Achievement() {
  return (
    <div className="p-10 flex flex-col justify-center lg:p-40 items-center gap-10">
      {/* text section section */}
      <div className="flex flex-col gap-6 justify-center py-6 ">
        <span className="uppercase tracking-[8px] text-lg text-primary text-center sm:text-start">
          What we have accomplished
        </span>
        <h1 className="text-3xl font-bold uppercase text-black text-center">
          Our Achievements
        </h1>
      </div>
      {/* image section */}
      <div className="flex gap-6 flex-wrap items-center justify-center">
        {/* achievment 1 */}
        <div className="flex-1 max-w-96 min-w-64 p-8 border rounded-md flex flex-col items-center justify-center gap-5 hover:bg-primary transition-all ease-in-out delay-[0.2s]">
          <span className="text-5xl font-semibold text-black">2500+</span>
          <p className="text-gray-900 text-center">
            Empowered Lives Men and Women of Honor impacting their communities.
          </p>
        </div>
        {/* achievment 2 */}
        <div className="flex-1 max-w-96 min-w-64 p-8 border rounded-md flex flex-col items-center justify-center gap-5 hover:bg-primary transition-all ease-in-out delay-[0.2s]">
          <span className="text-5xl font-semibold text-black">30+</span>
          <p className="text-gray-900 text-center">
            Churches Equipped Transforming lives through Christ-centered
            training.
          </p>
        </div>
        {/* achievment 3 */}
        <div className="flex-1 max-w-96 min-w-64 p-8 border rounded-md flex flex-col items-center justify-center gap-5   hover:bg-primary transition-all ease-in-out delay-[0.2s]">
          <span className="text-5xl font-semibold text-black">12+</span>
          <p className="text-gray-900 text-center">
            Cities empowered by Christ-Centered training
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
