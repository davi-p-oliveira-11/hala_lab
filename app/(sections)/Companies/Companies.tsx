import Image from "next/image";
import { companies } from "./companiesData";

export default function Companies() {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Phrase */}
        <p className="text-center text-[18px] md:text-[20px] text-gray-900 font-medium">
          Trusted by the best
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={company.src}
                alt={company.alt}
                width={company.width}
                height={company.height}
                className="opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
