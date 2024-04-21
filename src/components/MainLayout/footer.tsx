import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTiktokFilled,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="p-20 w-full flex flex-wrap gap-8 flex-col sm:flex-row sm:gap-8">
        <div className="flex-1 flex flex-col gap-2 items-center sm:items-start">
          <img src="/assets/logo.jpg" alt="Logo" className="w-52 h-16" />
          <p className="text-center sm:text-start">
            is a non-profit organization licensed by the Ethiopian Council
            office in 2007G.C.
          </p>
          <div className="flex gap-3">
            <IconBrandFacebookFilled className="text-primary" />
            <IconBrandYoutubeFilled className="text-primary" />
            <IconBrandTwitterFilled className="text-primary" />
            <IconBrandTiktokFilled className="text-primary" />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-xl text-center sm:text-start">
              Links
            </p>
            <Nav label="Home" url="/" />
            <Nav label="About us" url="/about" />
            <Nav label="Gallery" url="/gallery" />
            <Nav label="Contact us" url="/contact" />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-xl text-center sm:text-start">
              Contact us
            </p>
            <p className="text-center sm:text-start">
              {" "}
              +251911746538 / +251912466019
            </p>

            <Nav
              label="thomasisatpeace@gmail.com"
              url="mailto:thomasisatpeace@gmail.com"
              noCap
            />
            <Nav
              label="isa60intethiomin@gmail.com"
              url="mailto:isa60intethiomin@gmail.com"
              noCap
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center py-8">
        Copyright @ ISA60 International Ethiopian Ministry 2024. All Rights
        Reserved.
      </div>
    </div>
  );
}

function Nav({
  label,
  url,
  noCap,
}: {
  label: string;
  url: string;
  noCap?: boolean;
}) {
  return (
    <Link
      href={url}
      className={`${
        noCap ? "" : "capitalize"
      } text-center sm:text-start font-medium hover:text-primary transition-colors duration-75 ease-in-out
      }`}
    >
      {label}
    </Link>
  );
}
