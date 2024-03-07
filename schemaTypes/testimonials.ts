import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
    }),
  ],
});
