export default function ServiceCard({ service }) {
  return (
    <div className="bg-white/5 rounded-2xl p-8 border border-purple-500/20">

      <h3 className="text-2xl font-bold">
        {service.title}
      </h3>

      <p className="mt-4 text-gray-400">
        {service.description}
      </p>

    </div>
  );
}