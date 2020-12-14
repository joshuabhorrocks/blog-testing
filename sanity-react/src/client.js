import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "nynen9mb",
  dataset: "production",
  useCdn: true,
});