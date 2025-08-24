import Image from "next/image";
import Link from "next/link";
import { logo } from "@/index"; // Ensure this is a statically imported image
import { categories } from "@/data";

type Category = {
  name: string;
  slug: string;
  href: string;
};


export function Footer() {
  return (
    <footer className="bg-black text-white font-sans py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Contact */}
        <div className="space-y-4">
          <div>
            <Image
              src={logo}
              alt="Samyak Tools Logo"
              width={110}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <svg width="20" height="20" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v12H4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4l-10 7L2 4" /></svg>
            </span>
            <a href="mailto:Help@Frybix.Com" className="hover:underline text-sm">Help@Frybix.Com</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <svg width="20" height="20" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V18a2 2 0 0 1-2.18 2A19.73 19.73 0 0 1 3.09 5.18 2 2 0 0 1 5 3h1.09a2 2 0 0 1 2 1.72 13.1 13.1 0 0 0 .57 2.42A2 2 0 0 1 8.09 8.47L7.33 9.23A16 16 0 0 0 14.77 16.67l.77-.77A2 2 0 0 1 16 14.91a13.1 13.1 0 0 0 2.42.57A2 2 0 0 1 20.91 17V18a2 2 0 0 1-2.18 2z" /></svg>
            </span>
            <a href="tel:+123445667889" className="hover:underline text-sm">+1234 456 678 89</a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline text-sm">Home</Link></li>
            <li><Link href="/aboutUs" className="hover:underline text-sm">About Us</Link></li>
            <li><Link href="/downloads" className="hover:underline text-sm">Downloads</Link></li>
            <li><Link href="/ContactUs" className="hover:underline text-sm">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:underline text-sm">Terms Of Use</Link></li>
            <li><Link href="/privacy" className="hover:underline text-sm">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:underline text-sm">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={cat.href} className="hover:underline">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <div className="text-sm mb-3">Stay Up To Date</div>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-black outline-none"
          />
        </div>
      </div>
      <div className="mt-10 pt-5 border-t border-[#262626] text-center text-xs text-white/70">
        Copyright 2022 Uifry.Com All Rights Reserved
      </div>
    </footer>
  );
}
