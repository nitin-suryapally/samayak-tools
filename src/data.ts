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
    name: "Marathon-3 Champion Micromotor",
  },
  {
    imgSrc: machine2,
    name: "Marathon-3 Champion Micromotor",
  },
  {
    imgSrc: machine3,
    name: "Shaft Machine Handpiece",
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
  iconColor: string; // "red" | "blue" | ...
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
      "/machine/orotig-evo-x.jpg",
      "/machine/orotig-revo-x.jpg",
      "/machine/orotig-flash-series.jpg",
      "/machine/orotig-midi-tech.jpg",
    ],
    features: [
      {
        title: "Orotig Laser Welders",
        items: [
          {
            label: "Orotig Midi Tech",
            desc: "An entry-level laser welder providing an affordable solution for common goldsmithing applications like repair work. Ideal for small shops.",
            iconColor: "blue",
          },
          {
            label: "Orotig Evo Series",
            desc: "Simple, unique, and robust desktop lasers designed for functionality and accessible work environments, ideal for ring sizing and stone setting.",
            iconColor: "green",
          },
          {
            label: "Orotig Evo X Tech",
            desc: "The industry-leading laser welder with innovative SoftSpot technology for impeccable, smooth, and porosity-free welds across various metals.",
            iconColor: "red",
          },
          {
            label: "Orotig Revo X+",
            desc: "A stand-up welder providing the highest standard with maximum power, frequency, and cooling for non-stop working sessions.",
            iconColor: "yellow",
          },
          {
            label: "Orotig Flash Series",
            desc: "Created for the most demanding chain welding applications, allowing simultaneous management of 2 fibers with a single laser generator.",
            iconColor: "purple",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Service & Support",
        desc: [
          "All our machines come with comprehensive service packages and support to ensure optimal performance and longevity.",
          "We offer on-site training and setup to get your team up and running quickly.",
        ],
        iconColor: "red",
      },
    ],
  },
  "casting-powder": {
    name: "Casting Powder",
    images: [
      "/casting-powder/prestige-royal-cast.jpg",
      "/casting-powder/prestige-sigma.jpg",
      "/casting-powder/prestige-unicast.jpg",
      "/casting-powder/ferro-vest.jpg",
    ],
    features: [
      {
        title: "Gypsum Bonded Investment Powders",
        items: [
          {
            label: "ROYAL CAST",
            desc: "A breakthrough in low-cost, high-quality material for casting brass and bronze jewelry, ensuring sharp, detailed castings without watermarks.",
            iconColor: "blue",
          },
          {
            label: "PRESTIGE SIGMA",
            desc: "Engineered to eliminate costly surface defects associated with casting the most difficult designs in silver and bronze.",
            iconColor: "green",
          },
          {
            label: "PRESTIGE UNICAST",
            desc: "A premium choice for casting gold up to 18k and producing complex designs in sterling and fine silver.",
            iconColor: "yellow",
          },
          {
            label: "PRESTIGE ORO",
            desc: "Ultra-premium investment for casting gold up to 22K, achieving the smoothest casting surface possible.",
            iconColor: "purple",
          },
          {
            label: "PRESTIGE SPARKLE",
            desc: "Special application powder for 'Stone in Place' casting, with a protective barrier for diamonds and semi-precious stones.",
            iconColor: "red",
          },
           {
            label: "PRESTIGE OPTIMA",
            desc: "Consistently provides superior, ultra-smooth casting surfaces for resin patterns, carving waxes, and hybrid materials.",
            iconColor: "orange",
          },
          {
            label: "FERRO VEST",
            desc: "A superior two-part, high-temperature investment for premium results casting platinum, palladium & stainless steel alloys.",
            iconColor: "gray",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Bulk Orders & Sizing",
        desc: [
          "Our casting powders are available in various quantities, from small batches to large production volumes.",
          "Contact us for custom orders and consultation on the best powder for your specific needs.",
        ],
        iconColor: "black",
      },
    ],
  },
  "wax": {
    name: "Wax",
    images: [
      "/wax/all-seasons-wax1.jpg",
      "/wax/all-seasons-wax2.jpg",
      "/wax/all-seasons-wax3.jpg",
      "/wax/all-seasons-wax4.jpg",
    ],
    features: [
      {
        title: "Jewelry Injection Wax",
        items: [
          {
            label: "ALL SEASONS™ Injection Wax",
            desc: "Perfect for use all year round, this versatile wax captures the sharpest details, provides a high gloss finish, and ensures complete fills for the most complex designs.",
            iconColor: "green",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Product Specifications",
        desc: [
          "Features low shrinkage with a low injection temperature (68°C) and near-zero ash content for cleaner burnouts.",
          "Patterns have an extra-long shelf life and any imperfections are easy to identify for repair.",
        ],
        iconColor: "blue",
      },
    ],
  },
  "alloy": {
    name: "Alloy",
    images: [
      "/alloy/fov-yellow-gold.jpg",
      "/alloy/legor-yellow-gold.jpg",
      "/alloy/pandora-alloys.jpg",
      "/alloy/master-alloys.jpg",
    ],
    features: [
      {
        title: "Master Alloys for Gold",
        items: [
          {
            label: "FOV SRL Yellow Gold Master Alloys",
            desc: "A wide range of alloys suitable for any application, offering unrivalled purity and consistency for crafting impeccable jewelry.",
            iconColor: "yellow",
          },
          {
            label: "Legor Yellow Gold Master Alloys",
            desc: "Designed to meet international standards and provide enhanced ease of workability, ensuring a high-quality starting material for your creations.",
            iconColor: "orange",
          },
           {
            label: "Pandora Alloys (Exclusive Distributor)",
            desc: "As the exclusive distributor, we offer Pandora Alloys, known for their superior quality and trusted by professionals in the industry.",
            iconColor: "purple",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Creative Freedom",
        desc: [
          "The ease with which these alloys can be shaped and worked means you can fully express your creativity in every detail.",
          "Available for various applications and gold karats.",
        ],
        iconColor: "red",
      },
    ],
  },
   "polishing-related-items": {
    name: "Polishing Related items",
    images: [
      "/polishing/dialux-luster.jpg",
      "/polishing/luxor-luster.jpg",
      "/polishing/canning-luster.jpg",
      "/polishing/polishing-buffs.jpg",
    ],
    features: [
      {
        title: "Polishing Compounds",
        items: [
          {
            label: "Dialux Luster",
            desc: "A select type of super soft abrasive for a bright shine on gold, silver, chrome, and stainless steel.",
            iconColor: "red",
          },
          {
            label: "Luxor Luster",
            desc: "High-gloss polishing compounds recognized for an excellent final mirror polish on precious metals.",
            iconColor: "blue",
          },
           {
            label: "Canning Luster",
            desc: "Solid polishing compound in a polybag for high-gloss polishing on nonferrous metals.",
            iconColor: "green",
          },
        ],
      },
      {
        title: "Buffs & Brushes",
        items: [
           {
            label: "Polishing Buffs",
            desc: "Soft cotton flannel buffs in all sizes (hard, soft, super soft) for final polishing on all metals.",
            iconColor: "yellow",
          },
           {
            label: "Mandrel Mounted & Unmounted Wheel Brushes",
            desc: "Available in hard, medium, and soft bristles or steel wire for different finishes.",
            iconColor: "purple",
          },
           {
            label: "Wood Hub Wheel Brush",
            desc: "Filled with Chungking Bristles on a wood base, available in 1, 2 & 3 lines.",
            iconColor: "orange",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Complete Polishing Solutions",
        desc: [
          "A complete line of polishing compounds and buffing mops covering all operations: pre-polishing, polishing, finishing, and super finishing.",
        ],
        iconColor: "black",
      },
    ],
  },
  "burs": {
    name: "Burs",
    images: ["/burs/burs1.jpg", "/burs/burs2.jpg"],
    features: [
      {
        title: "Precision Burs",
        items: [
          {
            label: "Product Information Coming Soon",
            desc: "We offer a wide range of high-quality burs for various materials and applications. Please check back soon for detailed product information.",
            iconColor: "gray",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Various Shapes & Sizes",
        desc: [
          "Our upcoming collection will include a wide variety of shapes and sizes to meet all your crafting needs.",
        ],
        iconColor: "black",
      },
    ],
  },
  "plating-solution": {
    name: "Plating Solution",
    images: ["/plating/plating1.jpg", "/plating/plating2.jpg"],
    features: [
      {
        title: "Finishing & Plating",
        items: [
          {
            label: "Product Information Coming Soon",
            desc: "Explore our professional-grade plating solutions for a perfect finish every time. Detailed product information will be available shortly.",
            iconColor: "gray",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Custom Colors & Finishes",
        desc: [
          "We will be offering custom plating solutions to match your exact specifications.",
        ],
        iconColor: "black",
      },
    ],
  },
  "micromotor": {
    name: "Micromotor",
    images: ["/micromotor/micromotor1.jpg", "/micromotor/micromotor2.jpg"],
    features: [
      {
        title: "High-Performance Micromotors",
        items: [
          {
            label: "Product Information Coming Soon",
            desc: "Our selection of micromotors delivers power and precision for detailed work. Please check back for product specifications.",
            iconColor: "gray",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "Attachments & Accessories",
        desc: [
          "A full range of handpieces and accessories will be available to complement our micromotor systems.",
        ],
        iconColor: "black",
      },
    ],
  },
  "melting-crucible": {
    name: "Melting Crucible",
    images: ["/crucible/crucible1.jpg", "/crucible/crucible2.jpg"],
    features: [
      {
        title: "Durable Crucibles",
        items: [
          {
            label: "Product Information Coming Soon",
            desc: "High-quality melting crucibles designed for durability and consistent performance. More details will be listed soon.",
            iconColor: "gray",
          },
        ],
      },
    ],
    customizable: [
      {
        title: "For All Metals",
        desc: [
          "Our range will include crucibles suitable for melting gold, silver, platinum, and other alloys.",
        ],
        iconColor: "black",
      },
    ],
  },
};

// types.ts (or wherever your types reside)
