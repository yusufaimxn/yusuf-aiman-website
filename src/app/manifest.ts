import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yusuf Aiman Portfolio",
    short_name: "Yusuf Aiman",
    description: "Personal portfolio of Yusuf Aiman, full-stack developer and software engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#090A0F",
    theme_color: "#090A0F",
    icons: [
      { src: "/icon.png", sizes: "500x500", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "500x500", type: "image/png", purpose: "any" },
    ],
  };
}
