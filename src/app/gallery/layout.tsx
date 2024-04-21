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
        </div>
      </div>
      {children}
    </div>
  );
}
