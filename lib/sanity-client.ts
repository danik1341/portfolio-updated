import { createClient } from "next-sanity";

const projectId = "jk7pqztf";
const dataset = "production";
const apiVersion = "2023-10-16";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export default client;
