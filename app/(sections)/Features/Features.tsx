import { featuresData } from "./featuresData";
import FeatureCard from "../../components/FeatureCard/FeatureCard"

export default function FeaturesSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12">
      {/* Section title */}
      <h2 
        className="text-3xl md:text-4xl font-regular text-center mb-12"
        style={{ fontFamily: "var(--font-source-serif4)" }}  
       >
        Why Halallab ?
      </h2>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
