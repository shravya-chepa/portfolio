import Sitemap from "sitemap";
import fs from "fs";
const hostname = "https://shravya-chepa.netlify.app/";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/#home", changefreq: "monthly", priority: 0.8 },
  { url: "/#about", changefreq: "monthly", priority: 0.8 },
  { url: "/#projects", changefreq: "monthly", priority: 0.8 },
  { url: "/#projects", changefreq: "monthly", priority: 0.8 },
  { url: "/#contact", changefreq: "monthly", priority: 0.8 },
];

const siteMapInstance = Sitemap.createSitemap({
  hostname,
  urls,
});

fs.writeFileSync("./public/sitemap.xml", siteMapInstance.toString());
