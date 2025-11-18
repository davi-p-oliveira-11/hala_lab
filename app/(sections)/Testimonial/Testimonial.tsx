import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h2
            className="text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px] font-normal leading-tight"
            style={{ fontFamily: "var(--font-source-serif4)" }}
          >
            I like being in control of my payroll, without the back and forth of
            using an accountant. Onfolk is clear, clean, and makes payroll easy
            to do. Other software products were confusing to use.
          </h2>

          <h4 className="mt-6 text-[18px] md:text-[16px] font-semibold">
            John Doe
          </h4>

          <p className="text-[14px] md:text-[13px] text-gray-600 mt-">
            Marketing & Operations Manager, SearchLand
          </p>

          <button className="px-6 py-3 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition mt-4">
            View Case Study →
          </button>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/person-1.svg"
            alt="Happy client"
            width={553}
            height={523}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
