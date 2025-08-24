import { StaticImageData } from "next/image";
import { machine1, machine2, machine3 } from "./index";

// src/data/categories.ts
export type Category = {
  name: string;
  href: string;
  slug: string;
};

export type Alloy = {
  title: string;
  description: string;
  imgSrc: StaticImageData | string;
};

export type WaxItem = {
  title: string;
  variant: string;
  description: string;
  imgSrc: StaticImageData | string;
  download?: string;
};

export type WaxFlexItem = {
  imgSrc: StaticImageData | string;
  description: string;
  download: string;
};

export const categories: Category[] = [
  {
    name: "Casting Powder",
    slug: "casting-powder",
    href: "/categories/casting-powder",
  },
  { name: "Wax", slug: "wax", href: "/categories/wax" },
  { name: "Alloy", slug: "alloy", href: "/categories/alloy" },
  { name: "Machine", slug: "machine", href: "/categories/machine" },
  { name: "Burs", slug: "burs", href: "/categories/burs" },
  {
    name: "Plating Solution",
    slug: "plating-solution",
    href: "/categories/plating-solution",
  },
  {
    name: "Polishing Related items",
    slug: "polishing-related-items",
    href: "/categories/polishing-related-items",
  },
  { name: "Micromotor", slug: "micromotor", href: "/categories/micromotor" },
  {
    name: "Melting Crucible",
    slug: "melting-crucible",
    href: "/categories/melting-crucible",
  },
];

export const productCategories = [
  { name: "Casting Powder", slug: "casting-powder" },
  { name: "Wax", slug: "wax" },
  { name: "Alloy", slug: "alloy" },
  { name: "Machine", slug: "machine" },
  { name: "Burs", slug: "burs" },
  { name: "Plating Solution", slug: "plating-solution" },
  { name: "Polishing Related items", slug: "polishing-related-items" },
  { name: "Micromotor", slug: "micromotor" },
  { name: "Melting Crucible", slug: "melting-crucible" },
];

export const machines = [
  {
    imgSrc: machine1,
    name: "Machine Name",
  },
  {
    imgSrc: machine2,
    name: "Machine Name",
  },
  {
    imgSrc: machine3,
    name: "Machine Name",
  },
];

export const faqs = [
  {
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
];

export const alloyData: Alloy[] = [
  {
    title: "ALLOY PANDORA (9-14KT YELLOW)",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
    imgSrc: "/alloy1.jpg", // Place your images in /public
  },
  {
    title: "ALLOY PANDORA (9-14KT YELLOW)",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
    imgSrc: "/alloy2.jpg",
  },
  {
    title: "ALLOY PANDORA (9-14KT YELLOW)",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
    imgSrc: "/alloy3.jpg",
  },
];

export const waxItems: WaxItem[] = [
  {
    title: "WAX BEADS PREMIUM",
    variant: "AQUA RED",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    imgSrc: "/wax-aqua-red.jpg",
    download: "/brochures/aqua-red.pdf",
  },
  {
    title: "WAX BEADS PREMIUM",
    variant: "GREEN",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    imgSrc: "/wax-green.jpg",
    download: "/brochures/green.pdf",
  },
  {
    title: "WAX BEADS PREMIUM",
    variant: "RED",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    imgSrc: "/wax-red.jpg",
    download: "/brochures/red.pdf",
  },
];

export const waxFlexData: WaxFlexItem[] = [
  {
    imgSrc: "/waxflex1.jpg", // Place appropriate image in public, or use a placeholder
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    download: "/brochures/waxflex1.pdf",
  },
  {
    imgSrc: "/waxflex2.jpg",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    download: "/brochures/waxflex2.pdf",
  },
  {
    imgSrc: "/waxflex3.jpg",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    download: "/brochures/waxflex3.pdf",
  },
  {
    imgSrc: "/waxflex4.jpg",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.",
    download: "/brochures/waxflex4.pdf",
  },
];

export type FeatureItem = {
  label: string;
  desc: string;
  iconColor: string; // e.g., "red" | "black"
};

export type FeatureBlock = {
  title: string;
  items: FeatureItem[];
};

export type CustomizableBlock = {
  title: string;
  desc: string[];
  iconColor: string;
};

export type CategoryDetail = {
  name: string;
  images: string[];
  features: FeatureBlock[];
  customizable: CustomizableBlock[];
};

export const directors = [
  {
    name: "John Doe",
    image: "/director-1.jpg", // Replace with actual image
    bio:
      'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.',
  },
  {
    name: "John Doe",
    image: "/director-2.jpg", // Replace with actual image
    bio:
      'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.',
  },
];

// data/categoryDetailsData.ts
export const categoryDetailsData: Record<
  string,
  {
    name: string;
    images: string[];
    features: {
      title: string;
      items: {
        label: string;
        desc: string;
        iconColor: string;
      }[];
    }[];
    customizable: {
      title: string;
      desc: string[];
      iconColor: string;
    }[];
  }
> = {
  "machine": {
    name: "Machine",
    images: [
      "/polishing1.jpg",
      "/polishing2.jpg",
      "/polishing3.jpg",
      "/polishing4.jpg",
    ],
    features: [
      {
        title: "Polishing Compounds",
        items: [
          {
            label: "Budgeting Intervals",
            desc: "Curabitur dictum sapien, mollis, vulputate sit id accumsan. Suspendisse aliquet faucibus tincidunt.",
            iconColor: "red",
          },
          {
            label: "Budgeting Intervals",
            desc: "Morbi pretium massa vitae mattis aliquam mauris dictum.",
            iconColor: "red",
          },
          {
            label: "Budgeting Intervals",
            desc: "Suspendisse ullamcorper facilisis tristique. Vestibulum eu eros a urna convallis consequat.",
            iconColor: "red",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Fully Customizable",
        desc: [
          "Curabitur dictum sapien, mollis, vulputate sit id accumsan. Suspendisse aliquet faucibus tincidunt.",
          "Donec egestas elit vitae gravida gravida. Etiam dictum nisi eget dolor laoreet, vitae dictum sapien gravida.",
        ],
        iconColor: "red",
      },
      {
        title: "Fully Customizable",
        desc: [
          "Curabitur dictum sapien, mollis, vulputate sit id accumsan. Suspendisse aliquet faucibus tincidunt.",
          "Donec egestas elit vitae gravida gravida. Etiam dictum nisi eget dolor laoreet, vitae dictum sapien gravida.",
        ],
        iconColor: "black",
      },
    ],
  },
"casting-powder": {
    name: "Casting Powder",
    images: [
      "/polishing1.jpg",
      "/polishing2.jpg",
      "/polishing3.jpg",
      "/polishing4.jpg",
    ],
    features: [
      {
        title: "Polishing Compounds",
        items: [
          {
            label: "Budgeting Intervals",
            desc: "Curabitur dictum sapien, mollis, vulputate sit id accumsan. Suspendisse aliquet faucibus tincidunt.",
            iconColor: "red",
          },
          {
            label: "Budgeting Intervals",
            desc: "Morbi pretium massa vitae mattis aliquam mauris dictum.",
            iconColor: "red",
          },
          {
            label: "Budgeting Intervals",
            desc: "Suspendisse ullamcorper facilisis tristique. Vestibulum eu eros a urna convallis consequat.",
            iconColor: "red",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Fully Customizable",
        desc: [
          "Curabitur dictum sapien, mollis, vulputate sit id accumsan. Suspendisse aliquet faucibus tincidunt.",
          "Donec egestas elit vitae gravida gravida. Etiam dictum nisi eget dolor laoreet, vitae dictum sapien gravida.",
        ],
        iconColor: "red",
      },
      {
        title: "Fully Customizable",
        desc: [
          "Curabitur dictum sapien, mollis, vulputate sit id accumsan. Suspendisse aliquet faucibus tincidunt.",
          "Donec egestas elit vitae gravida gravida. Etiam dictum nisi eget dolor laoreet, vitae dictum sapien gravida.",
        ],
        iconColor: "black",
      },
    ],
  },
  // ...add additional categories here, with the same shape as above
};

// types.ts (or wherever your types reside)
