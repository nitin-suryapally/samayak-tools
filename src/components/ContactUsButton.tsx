import Link from 'next/link';

export function ContactUsButton() {
    return (
        <Link href="/contact" className='hidden sm:block'>
            <button
                type="button"
                className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition-colors hover:border-black hover:border-[1px]"
            >
                Contact Us
            </button>
        </Link>
    );
}