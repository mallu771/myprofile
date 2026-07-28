export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">

      <p className="italic">
        "{item.review}"
      </p>

      <h3 className="mt-6 font-bold">
        {item.name}
      </h3>

      <span className="text-gray-400">
        {item.company}
      </span>

    </div>
  );
}