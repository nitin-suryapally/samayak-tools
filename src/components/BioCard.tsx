import Image from "next/image";
import { director_image, ring } from "../index";

export default function BioCard() {
    return (
        <section className="bg-black rounded-2xl w-full max-w-7xl mx-auto p-5 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden relative mb-6">
            {/* Left: Text content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-white text-2xl md:text-3xl mb-2 font-serif">Your Name</h2>
                <hr className="border-t border-white border-opacity-50 w-32 mb-3 mx-auto md:mx-0" />
                <div className="text-white text-lg mb-7">Managing Director</div>
                <p className="text-white text-base md:text-lg tracking-wide leading-relaxed font-medium">
                    With over 9 years of experience selling residential real estate, Paige has become one of the top-selling agents in the state of Utah. She prides herself on offering a white glove, full-service experience to both buyers and sellers with the help of her amazing team!
                </p>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center min-h-[220px]">
                <div className="relative w-full max-w-[370px] aspect-video rounded-xl overflow-hidden border border-white/10">
                    <Image
                        src={director_image} 
                        alt="Managing Director"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            {/* Decorative Rings as image at the bottom right */}
            <div className="hidden md:block absolute -right-30 -bottom-40 w-100 h-100 pointer-events-none select-none z-20">
                <Image
                    src={ring} // Ensure your ring image is imported or use the public path
                    alt=""
                    fill
                    className="object-contain"
                    draggable={false}
                />
            </div>
        </section>
    );
}
