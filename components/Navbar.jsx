"use client";


const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  return (
   
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold gradient-text">Mallikarjun</h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
  
  );
}