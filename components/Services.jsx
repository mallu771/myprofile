import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-28">

      <SectionTitle
        title="Services"
        subtitle="What I Do"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
          />
        ))}

      </div>

    </section>
  );
}