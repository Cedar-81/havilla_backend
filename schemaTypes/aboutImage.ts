import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  type: "document",
  title: "About Image",
  fields: [
    defineField({
      title: "About",
      name: "about",
      type: "array",
      validation: (Rule) => Rule.required().min(4).max(4),
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
