/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Rules",
  name: "rule",
  path: "public/uploads/rules",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    }
  ],
  ui: {
    router: ({ document }) => {
      return "/rules/"+document._sys.relativePath.split("/")[0];
    },
  },
};
