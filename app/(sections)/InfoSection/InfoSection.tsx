import Image from "next/image";
import InfoCard from "@/app/components/InfoCard/InfoCard";
import { infoCardsData } from "@/app/components/InfoCard/InfoCardData";

export default function InfoSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Smarter payroll for modern teams
        </h2>

        <p className="text-[17px] md:text-[18px] text-gray-700 leading-relaxed">
          Everything you need to manage payroll, automate tasks, and keep your
          team paid on time.
        </p>
      </div>

      {/* Content area */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image (60%) */}
        <div className="w-full md:w-3/5">
          <Image
            src="/images/info-img.svg"
            alt="Info section image"
            width={695}
            height={550}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Info cards container (40%) */}
        <div className="w-full md:w-2/5 flex flex-col gap-6">
          {infoCardsData.map((item) => (
            <InfoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
