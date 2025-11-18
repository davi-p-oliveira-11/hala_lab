import Image from "next/image";
import { FeatureData } from "../../(sections)/Features/features.types";

interface FeatureCardProps {
  feature: FeatureData;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="w-[400px] h-[284px] flex flex-col items-center text-center px-4">
      {/* Icon */}
      <Image
        src={feature.icon}
        alt={feature.title}
        width={64}
        height={64}
        className="mb-4"
      />

      {/* Title */}
      <h4 className="text-[20px] md:text-[22px] font-semibold leading-snug">
        {feature.title}
      </h4>

      {/* Description */}
      <p className="mt-3 text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
