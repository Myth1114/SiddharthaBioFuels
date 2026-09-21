import { useEffect } from "react";

const SITE_URL = "https://www.siddharthabiofuels.com.np";

function SEO({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  type = "website",
  noIndex = false,
}) {
  useEffect(() => {
    const fullTitle = title;

    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;

    updateMeta("description", description);

    updateMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

    updateMetaProperty("og:type", type);
    updateMetaProperty("og:title", fullTitle);
    updateMetaProperty("og:description", description);
    updateMetaProperty("og:url", canonicalUrl);
    updateMetaProperty("og:image", `${SITE_URL}${image}`);
    updateMetaProperty("og:site_name", "Siddhartha Bio Fuels");

    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", `${SITE_URL}${image}`);

    updateCanonical(canonicalUrl);
  }, [title, description, path, image, type, noIndex]);

  return null;
}

function updateMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateMetaProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

export default SEO;
