export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6">
      <ul className="flex gap-8 bg-[#181c2a] rounded-full px-8 py-2 shadow-lg">
        <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
