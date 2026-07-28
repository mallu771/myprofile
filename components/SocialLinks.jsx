import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-5 mt-8 text-3xl">

      <a href="https://github.com/yourusername">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/yourusername">
        <FaLinkedin />
      </a>

      <a href="https://instagram.com/yourusername">
        <FaInstagram />
      </a>

    </div>
  );
}