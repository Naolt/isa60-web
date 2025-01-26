"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { urlForImage } from "@/sanity/image";
import { getImages } from "@/sanity/sanity.query";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

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
  asset: { _type: "image" };
};

export default function PhotoPage() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const imagesPerPage = 12;

  // Reference for our observer
  const observer = useRef<IntersectionObserver>();
  // Reference for the last image element
  const lastImageRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    setIsLoading(true);
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    getImages(start, end)
      .then((newImages: Image[]) => {
        setImages((prev) => [...prev, ...newImages]);
        setHasMore(newImages.length === imagesPerPage);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log("error", err);
        setIsLoading(false);
      });
  }, [page]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Modal = ({ image }: { image: Image }) => {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
        <div className="bg-gray-100 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]  relative cursor-pointer">
          <Image
            src={urlForImage(image.asset).url()}
            alt="random"
            fill
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-14 flex items-center bg-black/[0.5] px-8">
            <p className="text-white">{image.alt}</p>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 p-3 bg-black/[0.7] text-white"
          >
            <IconX />
          </button>
        </div>
      </div>,
      document.getElementById("modal-root")!
    );
  };

  const skeletonArray = Array(4).fill(null); // Show 4 skeletons in a row while loading

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((image: Image, index: number) => (
          <div
            ref={index === images.length - 1 ? lastImageRef : undefined}
            key={image._key}
            className="bg-gray-400 flex-1 h-64 relative cursor-pointer"
            onClick={() => {
              setSelectedImage(image);
              openModal();
            }}
          >
            <ImageCard image={image} />
          </div>
        ))}

        {/* Show skeletons while loading more images */}
        {isLoading &&
          skeletonArray.map((_, index) => (
            <ImageSkeleton key={`skeleton-${index}`} />
          ))}
      </div>

      {isModalOpen && selectedImage && <Modal image={selectedImage} />}
    </div>
  );
}

function ImageCard({ image }: { image: Image }) {
  return (
    <div className="bg-gray-400 flex-1 h-64 relative cursor-pointer">
      <Image
        src={urlForImage(image.asset).url()}
        alt="random"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
      <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.5] transition-opacity duration-300 ease-in-out px-3">
        <p className="text-white text-center">{image.alt}</p>
      </div>
    </div>
  );
}

function ImageSkeleton() {
  return (
    <div className="bg-gray-200 flex-1 h-64 relative animate-pulse">
      <div className="absolute inset-0" />
    </div>
  );
}
