
import Link from 'next/link'
import type { NavItem, Category } from '../types/nav'

type MobileMenuProps = {
  navLinks: NavItem[]
  categories: Category[]
}

export default function MobileMenu({ navLinks, categories }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow">
      {navLinks.map(link => (
        <Link key={link.name} href={link.href} className="block font-bold hover:text-red">
          {link.name}
        </Link>
      ))}

      <details>
        <summary className="cursor-pointer font-bold">Categories</summary>
        <ul className="pl-4 mt-1 space-y-1">
          {categories.map(cat => (
            <li key={cat.name}>
              <Link href={cat.href} className="block hover:text-red font-regular">
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      <Link href="/contact" className="block font-bold hover:text-red">
        Contact Us
      </Link>
    </div>
  )
}
