export default function ContactInfoBar() {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 text-center">
          {/* Contacts */}
          <div>
            <h4 className="font-black tracking-wide mb-2 text-base md:text-lg">CONTACTS</h4>
            <p className="text-red-500 font-semibold tracking-wide text-sm md:text-base mb-1">+919016521298</p>
            <p className="text-red-500 font-semibold tracking-wide text-sm md:text-base">gopal@samyaktool.com</p>
          </div>
          {/* Address */}
          <div>
            <h4 className="font-black tracking-wide mb-2 text-base md:text-lg">ADDRESS</h4>
            <p className="text-red-500 font-semibold text-xs leading-snug md:text-base">
              UNIT NO.1 MAHAVIR INDUSTRIAL ESTATE, NEAR PAPER BOX, ANDHERI EAST, MUMBAI - 400093<br />
              (OFF. MAHAKALI CAVES ROAD)
            </p>
          </div>
          {/* Opening Hours */}
          <div>
            <h4 className="font-black tracking-wide mb-2 text-base md:text-lg">OPENING HOURS</h4>
            <p className="text-red-500 font-semibold text-xs md:text-base mb-1">MON - SAT: 9:00 - 18:00</p>
            <p className="text-red-500 font-semibold text-xs md:text-base">SUNDAY: CLOSED</p>
          </div>
        </div>
      </div>
    </section>
  );
}
