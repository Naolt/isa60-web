import { defineField } from "sanity";

const images = {
  name: "images",
  title: "images",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default images;
