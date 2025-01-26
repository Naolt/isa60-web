import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getImages(start = 0, end = 12) {
  return client.fetch(
    groq`*[_type == "images"]{
      "flatImages": images[]{
        _key,
        alt,
        asset
      }
    }.flatImages[${start}...${end}]`
  );
}

export async function getVideos() {
  return client.fetch(groq`*[ _type == "videos" ]`);
}

export async function getProfile() {
  return client.fetch(groq`*[ _type == "profile" ]`);
}
