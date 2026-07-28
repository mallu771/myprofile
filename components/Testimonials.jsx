import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-28">

      <SectionTitle
        title="Testimonials"
        subtitle="What Clients Say"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {testimonials.map((item) => (
          <TestimonialCard
            key={item.name}
            item={item}
          />
        ))}

      </div>
    </section>
  );
}