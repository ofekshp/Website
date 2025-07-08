const Footer = () => (
  <footer className="text-center py-6 bg-gradient-to-r from-amber-100 via-stone-100 to-amber-200 text-brown-800 text-sm shadow-inner border-t border-amber-300">
    © {new Date().getFullYear()}{" "}
    <span className="font-semibold text-amber-700">Ofek Shpirer</span>. All
    rights reserved.
  </footer>
);

export default Footer;
