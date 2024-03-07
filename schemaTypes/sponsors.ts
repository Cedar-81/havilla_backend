// schemas/sponsor.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "sponsor",
  type: "document",
  title: "Sponsor",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    // defineField({
    //   name: "logo",
    //   title: "Logo",
    //   type: "image",
    // }),
  ],
});
