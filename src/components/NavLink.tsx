
'use client'
import Link from 'next/link'
import type { NavItem } from '../types/nav'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  item: NavItem
  className?: string
}

export default function NavLink({ item, className = '' }: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === item.href
  const activeClass = isActive ? 'text-red font-bold' : 'font-bold hover:text-red'

  return (
    <Link href={item.href} className={`${activeClass} ${className}`}>
      {item.name}
    </Link>
  )
}
