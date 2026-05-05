import type { MetadataRoute } from "next";

const BASE_URL = "https://personalportfolio12.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "publications",
    "achievements",
    "contact",
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...sections.map((section) => ({
      url: `${BASE_URL}/#${section}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
