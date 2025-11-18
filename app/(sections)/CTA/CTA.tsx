export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div
          className="
          bg-black rounded-2xl 
          px-8 md:px-12 py-12 
          flex flex-col md:flex-row 
          items-start md:items-center 
          justify-between 
          gap-10
        "
        >
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h2
              className="
                text-white 
                text-[32px] md:text-[40px] lg:text-[48px] 
                font-regular leading-tight
              "
              style={{ fontFamily: "var(--font-source-serif4)" }}
            >
              See Payroll in action
            </h2>

            <p
              className="
              text-white/80 
              text-[16px] md:text-[18px] 
              mt-4 leading-relaxed
            "
            >
              Book a 25-minute product demo with our experts
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* White Button */}
            <button
              className="
                bg-white text-black 
                px-8 py-3 rounded-lg font-medium
                w-full md:w-auto
              "
            >
              Book a demo →
            </button>

            {/* Black Button (Outlined) */}
            <button
              className="
                bg-black text-white 
                px-8 py-3 rounded-lg font-medium 
                border border-white
                w-full md:w-auto
              "
            >
              Explore hahallab
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
