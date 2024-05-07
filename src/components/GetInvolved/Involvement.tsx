import Link from "next/link";
import React from "react";

function Involvement() {
  return (
    <div className="p-8 sm:p-32 grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-0">
      <div className="flex flex-col p-8 gap-5 bg-gray-100 min-h-[325px] rounded-xl md:rounded-none ">
        <h1 className="text-3xl font-bold uppercase">1. PRAYER</h1>
        <p className="text-gray-800">
          Everything we do is made possible through prayer. The vision and the
          strategy were born in prayer, and the work can prosper and bear fruit
          only through prayer. Thank you for remembering to pray for our board,
          our co-workers, our partners, and the work we do.
        </p>
      </div>
      <div className="flex flex-col p-8 gap-5 bg-[#1A1B1E] min-h-[325px] rounded-xl md:rounded-none">
        <h1 className="text-3xl font-bold text-white uppercase">
          2. VOLUNTEER WORK
        </h1>
        <p className="text-gray-100 ">
          We are in need of volunteers who can help us develop the ministry. If
          you have a passion for mission and want to contribute with your gifts
          and your experience, please send us an email to:{" "}
          <Link
            href={"mailto:thomas.melesse@isa60minethio.com"}
            className="underline text-sm"
          >
            thomas.melesse@isa60minethio.com
          </Link>{" "}
          where you tell us about yourself and what you would like to do.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col p-8 gap-5 bg-primary min-h-[325px] rounded-xl md:rounded-none">
        <h1 className="text-3xl font-bold uppercase">3. FINANCIAL SUPPORT</h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-gray-black flex-1">
            Our ministry is dependent on donations from private persons,
            churches, companies, and other organizations. By making a donation
            to our fund-raising foundation,
          </p>
          <ul className="flex-1">
            <li>Donate Securely Through:</li>
            <li className="flex gap-2 items-baseline">
              <span className="w-2 min-w-2 min-h-2 h-2 bg-black rounded-full"></span>
              <p className="">
                <b>Account Name:</b> ISA 60 International Ethiopia Ministry
              </p>
            </li>
            <li className="flex gap-2 items-baseline">
              <span className="w-2 min-w-2 min-h-2 h-2 bg-black rounded-full"></span>
              <p>
                <b>Account Number:</b> 1000422989777
              </p>
            </li>
            <li className="flex gap-2 items-baseline">
              <span className="w-2 min-w-2 min-h-2 h-2 bg-black rounded-full"></span>
              <p>
                <b>Address:</b> Jemo Mikael, Mina Mall building 5th floor
              </p>
            </li>
            <li className="flex gap-2 items-baseline">
              <span className="w-2 min-w-2 min-h-2 h-2 bg-black rounded-full"></span>
              <p>
                <b>Phone:</b> 0911746538/0912466019
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Involvement;
