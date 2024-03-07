import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  type: "document",
  title: "Team",
  fields: [
    defineField({
      title: "Team",
      name: "team",
      type: "array",
      validation: (Rule) => Rule.required().min(3).max(3),
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "caption" },
            { type: "string", name: "Name" },
            { type: "image", name: "Image" },
          ],
        },
      ],
    }),
  ],
});
