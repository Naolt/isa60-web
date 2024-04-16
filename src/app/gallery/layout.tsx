"use client";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isPhoto = pathname === "/gallery";
  return (
    <div>
      <div className="p-10 sm:p-20 bg-white flex flex-col  gap-16 lg:p-40">
        <div className="flex flex-col items-center gap-6">
          <span className="uppercase tracking-[8px] text-lg text-primary">
            Gallery
          </span>
          <h1 className="text-4xl font-bold capitalize">
            Our Story in Photos & Videos
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* input with search icon */}
          <div className="relative w-full max-w-[400px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 outline-none focus:border-primary"
            />

            <IconSearch className="h-6 w-6 absolute top-2 left-2 text-gray-400" />
          </div>

          {/* Tab for Photos and videos */}
          <div className="flex gap-4">
            <Link href="/gallery">
              <button
                className={`px-4 py-2  rounded-3xl ${
                  isPhoto
                    ? "text-background bg-primary"
                    : "bg-yellow-50 text-black"
                }`}
              >
                Photos
              </button>
            </Link>
            {/*<Link href="./video">*/}
            <button
              onClick={() => router.push("/gallery/video")}
              className={`px-4 py-2  rounded-3xl ${
                !isPhoto
                  ? "text-background bg-primary"
                  : "bg-yellow-50 text-black"
              }`}
            >
              Videos
            </button>
            {/*</Link>*/}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
