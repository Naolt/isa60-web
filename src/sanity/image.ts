import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: "d70k8dvu",
  dataset: "production",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
