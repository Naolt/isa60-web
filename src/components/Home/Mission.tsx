import React from "react";
import { Button } from "../ui/button";
import {
  IconEye,
  IconEyeFilled,
  IconHeartHandshake,
  IconQuote,
  IconTarget,
} from "@tabler/icons-react";

function Mission() {
  return (
    <div className="p-10 sm:p-20 bg-background flex flex-col gap-12 lg:flex-row lg:gap-8  lg:p-40">
      {/* image section */}
      <div className="flex flex-col gap-4 items-center md:items-start flex-1 py-8">
        <IconQuote />
        <p className="max-w-[507px] text-2xl  italic text-center md:text-start">
          But the fruit of the Spirit is love, joy, peace, patience, kindness,
          goodness, faithfulness, gentleness, self-control; against such things
          there is no law.
        </p>
        <span className="text-lg italic">Galatians 5:22-23</span>
      </div>
      {/* text section section */}
      <div className="flex flex-col gap-5 flex-1 ">
        <div className="flex gap-8 ">
          <div>
            <IconTarget size={"48px"} className="text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold capitalize mb-5">
              {" "}
              Our Mission
            </h1>
            <p className="text-gray-800">
              To mobilize, challenge, and equip men and women to become Men of
              Honor (MoH) and Women of Dignity (WoD) who live a Christ-centered
              life of love, grace, integrity, and respect – in the family, the
              work place, and the community.
            </p>
          </div>
        </div>
        <div className="flex gap-8 ">
          <div>
            <IconEye size={"48px"} className="text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold capitalize mb-5">
              {" "}
              Our Vision
            </h1>
            <p className="text-gray-800">
              To see nations transformed by ordinary men and women who choose to
              arise and shine in their families, their work places, and their
              communities.
            </p>
          </div>
        </div>
        <div className="flex gap-8 ">
          <div>
            <IconHeartHandshake size={"48px"} className="text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold capitalize mb-5">
              {" "}
              Our Values
            </h1>
            <p className="text-gray-800">
              We hold Christ at the center of everything we do. We believe in
              empowering individuals to &quot;arise and shine&quot; through
              Christ-centered lives fueled by love, grace, integrity, and
              respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
