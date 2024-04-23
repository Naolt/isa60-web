/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-[750px] relative overflow-hidden">
      <img
        src="/assets/family.webp"
        alt="family photo"
        className="w-full h-full object-cover object-top"
      />
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="w-full h-full z-20 absolute top-0 left-0 bg-black/[0.7]">
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <span className="text-lg text-white uppercase w-fit flex flex-col items-center">
            Arise & Shine
            <span className="h-1 w-3/4 bg-blue-500"></span>
          </span>
          <h1 className="text-white text-4xl md:text-6xl max-w-[721px] text-center font-bold capitalize">
            Men Of Honor And Women Of Dignity
          </h1>
          <p className="text-white text-xl text-center">
            Discover inspiring stories and the impact of ISA60
          </p>
          <div className="mt-6">
            <Link href={"contact"}>
              <Button size={"lg"}>
                <span className="text-white">Contact us</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
