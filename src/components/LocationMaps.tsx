export default function LocationMaps() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Mumbai Location */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-black mb-3 tracking-wide">MUMBAI</h3>
          <div className="w-full max-w-xs h-60 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=MAHAVIR+INDUSTRIAL+ESTATE,+ANDHERI+EAST,+MUMBAI&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mumbai Location"
            ></iframe>
          </div>
        </div>
        {/* Rajkot Location */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-black mb-3 tracking-wide">RAJKOT</h3>
          <div className="w-full max-w-xs h-60 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Rajkot,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajkot Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
