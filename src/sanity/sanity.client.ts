import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "d70k8dvu",
  dataset: "production",
  apiVersion: "2024-04-21",
  useCdn: true,
};

const client = createClient(config);

export default client;
