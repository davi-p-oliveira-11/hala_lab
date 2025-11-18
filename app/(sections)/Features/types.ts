export interface LinkItem {
  label: string;
  href: string;
  src?: string;
}

export interface NavbarData {
  logo: {
    src: string;
    alt: string;
  };
  links: LinkItem[];
}
