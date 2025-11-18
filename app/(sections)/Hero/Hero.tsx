import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1
            className="font-semibold leading-tight text-[36px] md:text-[48px] lg:text-[80px]"
            style={{ fontFamily: "var(--font-source-serif4)" }}
          >
            Streamline your <br /> payroll process <br /> with automation
          </h1>

          <p className="mt-4 text-[16px] md:text-[17px] lg:text-[18px] text-gray-900 max-w-md mx-auto md:mx-0">
            The simple, efficient and error-free way to pay your team. Payruns
            in minutes, simple pricing, expert support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition">
              Get Started →
            </button>

            <button className="px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-100 transition">
              Learn More →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/hero.svg"
            alt="Hero Image"
            width={543}
            height={408}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
