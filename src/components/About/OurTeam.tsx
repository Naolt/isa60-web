/* eslint-disable @next/next/no-img-element */
import React from "react";
import Member from "./Member";

function OurTeam() {
  return (
    <div className="p-10 sm:p-20 flex flex-col items-center  lg:p-40 bg-gray-50">
      {/* text section section */}
      <div className="flex-1 flex flex-col gap-5 items-center">
        <span className="uppercase tracking-[8px] text-lg text-primary">
          Meet our team
        </span>
        {/* teams */}
        <div className="flex-1 flex flex-col gap-32 items-center">
          {/* leadership */}
          <div className="flex flex-col gap-16 items-center">
            <h1 className="text-3xl font-bold capitalize text-black">
              Leadership Team
            </h1>
            <div className="flex flex-wrap gap-24 justify-center">
              <Member
                name="Dr. Andreas Andersson"
                role="President"
                img="/assets/LeaderShip/andreas.jpg"
              />
              <Member
                name="Dr. Thomas Melesse (PhD)"
                role="National Director"
                img="/assets/LeaderShip/tomas.jpg"
              />
              <Member
                name="Enat Esatu"
                role="National Director Assistant"
                img="/assets/LeaderShip/enat.jpg"
              />
            </div>
          </div>
          {/* Board member */}

          <div className="flex flex-col gap-16 item-center">
            <h1 className="text-3xl font-bold capitalize text-black text-center">
              Board Members
            </h1>
            <div className="flex flex-wrap gap-24 justify-center">
              <Member
                name="Zeleke Degele"
                role="Board Director"
                img="/assets/Board/zeleke1.jpg"
              />
              <Member
                name="Jessica Hedman"
                role="CEO of Elnet"
                img="/assets/LeaderShip/jessica.jpg"
              />
              <Member
                name="Dr. Rahel Jigi"
                role="Board Member"
                img="/assets/Board/rahel.jpg"
              />
              <Member
                name="Lensa Gudina"
                role="Board Member"
                img="/assets/Board/lensa.jpg"
              />
              <Member
                name="Martha Biratu"
                role="Board Member"
                img="/assets/Board/martha.jpg"
              />
            </div>
          </div>
          {/* Volunteers */}
          <div className="flex flex-col gap-16 items-center">
            <h1 className="text-3xl font-bold capitalize text-black">
              Volunteers
            </h1>
            <div className="flex flex-wrap gap-24 justify-center">
              <Member
                name="Pastor Elias Paulos"
                role=""
                img="/assets/Volunteers/Pastor Elias Paulos.jpg"
              />
              <Member
                name="Pastor Eliyas Tafese"
                role=""
                img="/assets/Volunteers/Pastor Eliyas Tafese.jpg"
              />
              <Member
                name="Pastor Genet Megerssa"
                role=""
                img="/assets/Volunteers/Pastor Genet Megerssa.jpg"
              />
              <Member
                name="Sirag Ahimed"
                role=""
                img="/assets/Volunteers/Sirag Ahimed.jpg"
              />
              <Member
                name="Eng. Gizachew Desalegn"
                role=""
                img="/assets/Volunteers/Eng. Gizachew Desalegn.jpg"
              />
              <Member
                name="Tsegaye Befekadu"
                role=""
                img="/assets/Volunteers/Tsegaye Befekadu.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
