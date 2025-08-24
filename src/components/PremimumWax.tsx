import { waxItems } from '@/data'
import React from 'react'
import WaxCard from './WaxCard'

const PremimumWax = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-10 md:py-16">
      <h1 className="text-2xl md:text-4xl font-black text-center mb-2">WAX BEADS PREMIUM</h1>
      <div className="text-center text-sm md:text-lg mb-8 text-black font-medium max-w-xl mx-auto">
        One Wax For Everything, Unique Formula Works Perfectly For All Types Of Patterns, Great For Everything. From Thick Too Thin To Fine Filigree.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {waxItems.map((item, idx) => (
          <WaxCard item={item} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default PremimumWax