import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getImages() {
  return client.fetch(groq`*[ _type == "images" ]`);
}
export async function getVideos() {
  return client.fetch(groq`*[ _type == "videos" ]`);
}

export async function getProfile() {
  return client.fetch(groq`*[ _type == "profile" ]`);
}
