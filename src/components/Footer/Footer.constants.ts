type LinkType = {
  name: string;
  href: string;
  iconClass?: string;
}[];

export const ABOUT_LINKS: LinkType = [
  { name: "About us", href: "https://www.stubhub.es/about-us" },
  { name: "Magazine", href: "https://www.stubhub.es/magazine" },
  { name: "Developer", href: "https://github.com/stubhubint/" },
];

export const SOCIAL_LINKS: LinkType = [
  {
    name: "Twitter",
    href: "https://twitter.com/stubhubengbio",
    iconClass: "fa-twitter",
  },
  {
    name: "Github",
    href: "https://github.com/stubhubint",
    iconClass: "fa-github",
  },
];

export const COOL_LINKS: LinkType = [
  { name: "Some cool link", href: "#" },
  { name: "Some cool link", href: "#" },
  { name: "Some cool link", href: "#" },
];
