import { InfoCardItem } from "../InfoCard/InfoCard.types";

export default function InfoCard({ title, description }: InfoCardItem) {
  return (
    <div className="w-full md:w-[456px] min-h-[164px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] rounded-xl p-6 flex flex-col justify-center">
      <h4 
        className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-snug mb-2" 
        >
        {title}
      </h4>

      <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
