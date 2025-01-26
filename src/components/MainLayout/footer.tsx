"use client";
import { Profile, SocialLink } from "@/app/contact/page";
import { iconsFooter } from "@/constants";
import { getProfile } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getProfile()
      .then((res: Profile[]) => {
        setProfile(res[0]);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="px-4 py-20 sm:px-20 w-full flex flex-wrap gap-8 flex-col sm:flex-row sm:gap-8">
        <div className="flex-1 flex flex-col gap-2 items-center sm:items-start">
          <div className="relative w-52 h-16">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center sm:text-start">
            is a non-profit organization licensed by the Ethiopian Council
            office in 2007G.C.
          </p>
          <div className="flex gap-3">
            {profile?.social.map((social: SocialLink, index: number) => {
              return (
                <Link key={index} href={social.url} target="_blank">
                  {iconsFooter[social.platform.toLowerCase()]}
                </Link>
              );
            })}

            {profile && profile.email.length > 0 && (
              <Link href={`mailto:${profile.email[0]}`}>
                {iconsFooter.email}
              </Link>
            )}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-xl text-center sm:text-start">
              Links
            </p>
            <Nav label="Home" url="/" />
            <Nav label="About us" url="/about" />
            <Nav label="Our program" url="/program" />
            <Nav label="Gallery" url="/gallery" />
            <Nav label="Contact us" url="/contact" />
            <Nav label="Get involved" url="/get_involved" />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-xl text-center sm:text-start">
              Contact us
            </p>
            <p className="text-center sm:text-start">
              {" "}
              {profile?.phone.map((phone, index) => (
                <>
                  {phone}
                  {index !== profile.phone.length - 1 && " | "}
                </>
              ))}
            </p>

            {profile?.email.map((email, index) => (
              <Nav key={index} label={email} url={`mailto:${email}`} noCap />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row justify-center py-8 text-center">
        <p>
          Copyright @ ISA60 International Ethiopian Ministry 2024. All Rights
          Reserved. &nbsp;|
        </p>

        <Link
          href={"https://naolt.vercel.app"}
          className="underline-offset-2  hover:text-yellow-500 hover:font-medium"
          target="_blank"
        >
          &nbsp; Developed by Naol Tamrat
        </Link>
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
