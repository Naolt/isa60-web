import { defineField } from "sanity";

const videos = {
  name: "videos",
  title: "videos",
  type: "document",
  fields: [
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "url",
          title: "Video URL",
        },
      ],
    },
  ],
};

export default videos;
