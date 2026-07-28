import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#070B18] text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-gray-400">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-8 bg-purple-600 px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}