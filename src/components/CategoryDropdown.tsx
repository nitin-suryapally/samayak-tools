'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Category } from '../types/nav'

type Props = {
  categories: Category[]
}

export default function CategoryDropdown({ categories }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-red font-bold focus:outline-none"
      >
        Categories ▾
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 bg-white shadow border rounded w-40 font-regular">
          {categories.map(cat => (
            <li key={cat.name}>
              <Link
                href={cat.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(!open)}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
