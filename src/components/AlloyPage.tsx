import AlloyCard from '@/components/AlloyCard'
import { alloyData } from '@/data'
import React from 'react'



const AlloyPage = () => {
    return (
        <section className="max-w-7xl mx-auto px-2 py-10 md:py-16">
            <h1 className="text-3xl md:text-4xl font-black text-center mb-12">ALLOY</h1>
            {alloyData.map((item, idx) => (
                <AlloyCard
                    key={idx}
                    title={item.title}
                    description={item.description}
                    imgSrc={item.imgSrc}
                    // Alternate layout L-R, R-L for visual rhythm
                    reverse={idx % 2 === 1}
                />
            ))}
        </section>
    )
}

export default AlloyPage