import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    defineField({
      title: "Gallery",
      name: "gallery",
      type: "array",
      validation: (Rule) => Rule.required().min(6).max(6),
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "caption" },
            { type: "image", name: "Image" },
          ],
        },
      ],
    }),
  ],
});
