import Image from "next/image";
import { camel_ring } from "..";

export default function ExpertiseSection() {
    return (
        <section className="w-full bg-white">
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-4 pt-8">
                <h2 className="text-2xl md:text-3xl font-black mb-2">OUR EXPERTISE</h2>
            </div>

            {/* Black Stats Bar */}
            <div className="relative bg-black overflow-hidden w-full py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative">
                    {/* Stats */}
                    <div className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20">
                            <div className="flex flex-col items-center justify-center px-5 py-2">
                                <span className="text-white font-black text-4xl md:text-5xl mb-2">10+</span>
                                <span className="text-white/90 text-xs md:text-base text-center">Years Of Experience</span>
                            </div>
                            <div className="flex flex-col items-center justify-center px-5 py-2">
                                <span className="text-white font-black text-4xl md:text-5xl mb-2">300+</span>
                                <span className="text-white/90 text-xs md:text-base text-center">Satisfied Clients</span>
                            </div>
                            <div className="flex flex-col items-center justify-center px-5 py-2">
                                <span className="text-white font-black text-4xl md:text-5xl mb-2">17+</span>
                                <span className="text-white/90 text-xs md:text-base text-center">Certified Awards</span>
                            </div>
                            <div className="flex flex-col items-center justify-center px-5 py-2">
                                <span className="text-white font-black text-4xl md:text-5xl mb-2">500+</span>
                                <span className="text-white/90 text-xs md:text-base text-center">Project Done</span>
                            </div>
                        </div>
                    </div>
                    {/* Ring & Camel Image */}
                    <div className="absolute -right-40 -bottom-20 hidden md:block z-10">
                        <Image
                            src={camel_ring}
                            alt=""
                            width={600}
                            height={600}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom gray text */}
            <div className="max-w-5xl mx-auto px-4 py-10">
                <p className="text-center text-gray-700 text-xs md:text-base font-medium leading-relaxed">
                    Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.  Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                </p>
            </div>
        </section>
    );
}
