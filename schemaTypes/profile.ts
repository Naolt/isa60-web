import { defineField } from "sanity";

const profile = {
  name: "profile",
  title: "profile",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "array",
      of: [
        {
          type: "string",
          title: "Email Address",
        },
      ],
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "array",
      of: [
        {
          type: "string",
          title: "Phone Number",
        },
      ],
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "mapLink",
      title: "Map Link",
      type: "string",
    },

    {
      name: "workingHour",
      title: "Working hour",
      type: "string",
    },
    {
      name: "social",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          title: "Social Link",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
        },
      ],
    },
  ],
};

export default profile;
