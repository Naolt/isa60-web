import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[426px] relative overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/assets/others/training.webp"
          alt="family photo"
          fill
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-full h-full z-20 absolute top-0 left-0 bg-black/[0.7]">
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <h1 className="text-white text-4xl md:text-6xl max-w-[721px] text-center font-bold capitalize">
            Our Program
          </h1>
          <p className="text-white text-xl text-center line-clamp-3">
            Empowering individuals across Ethiopia to live with purpose,
            integrity,
            <br />
            and Christ-centered values.
          </p>
        </div>
      </div>
    </div>
  );
}
