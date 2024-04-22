/* eslint-disable @next/next/no-img-element */
"use client";
import { urlForImage } from "@/sanity/image";
import { getImages } from "@/sanity/sanity.query";
import Image from "next/image";
import { useEffect, useState } from "react";

type Document = {
  _type: "images";
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  images: Image[];
};

type Image = {
  _key: string;
  alt: string;
  asset: { _type: "image" }; // Assuming the asset has a fixed "_type" of "image"
  // Add other properties for the asset if known (e.g., url, extension)
};

export default function PhotoPage() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getImages()
      .then((res: Document[]) => {
        console.log(res);
        setImages(res[0].images);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  }, []);

  console.log("images", images);

  return (
    // image masonry layout
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {isLoading &&
        new Array(8).fill(0).map((_, index: number) => {
          return (
            <div
              key={index}
              className="h-64 flex-1 bg-gray-400 animate-pulse"
            ></div>
          );
        })}

      {images.map((image: Image, index: number) => (
        <div
          key={index}
          className="bg-gray-400 flex-1 h-64 relative cursor-pointer"
        >
          <Image
            src={urlForImage(image.asset).url()}
            alt="random"
            fill
            className="w-full h-full object-cover"
          />
          <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.5] transition-opacity duration-300 ease-in-out px-3">
            <p className="text-white text-center">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
