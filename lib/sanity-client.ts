import { ClientConfig, createClient } from "next-sanity";

const config: ClientConfig = {
  projectId: "jk7pqztf",
  dataset: "production",
  apiVersion: "2023-10-16",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

const client = createClient(config);

export default client;
