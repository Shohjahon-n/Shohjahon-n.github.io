const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const defaultUrl = "https://shohjahon-n.github.io";

export const site = {
  name: "Shohjahon Ergashev",
  url: process.env.NEXT_PUBLIC_SITE_URL || `${defaultUrl}${basePath}`
};
