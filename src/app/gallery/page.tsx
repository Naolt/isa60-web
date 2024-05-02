"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { urlForImage } from "@/sanity/image";
import { getImages } from "@/sanity/sanity.query";
import { IconX } from "@tabler/icons-react";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {images.map((image: Image, index: number) => (
        <div
          key={index}
          className="bg-gray-400 flex-1 h-64 relative cursor-pointer"
          onClick={() => {
            setSelectedImage(image);
            openModal();
          }}
        >
          <ImageCard image={image} />
        </div>
      ))}
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
      />
      <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.5] transition-opacity duration-300 ease-in-out px-3">
        <p className="text-white text-center">{image.alt}</p>
      </div>
    </div>
  );
}
