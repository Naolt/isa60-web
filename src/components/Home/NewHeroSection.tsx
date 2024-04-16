/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";

export default function NewHero() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <div className="w-full">
        <img
          src="/assets/family.jpg"
          alt="family photo"
          className="object-contain object-top mx-auto  h-[90vh]"
        />
      </div>
      {/*<div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>*/}
      <div className="w-full h-full ">
        <div className="flex flex-col items-center justify-center h-full gap-6 p-16">
          <h1 className="text-gray-900 text-2xl md:text-4xl max-w-[721px] text-center font-bold uppercase">
            ISA60 INTERNATIONAL ETHIOPIAN MINISTRY PRESENTS
          </h1>
          <p className="text-gray-900 text-xl text-center capitalize">
            MEN OF HONOR AND WOMEN OF DIGNITY
          </p>
        </div>
      </div>
    </div>
  );
}
