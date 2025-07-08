const Hero = () => (
  <section
    id="hero"
    className="min-h-[75vh] flex flex-col justify-center items-center bg-gray-900 text-white text-center p-4 sm:p-8"
  >
    <h1 className="text-5xl sm:text-6xl font-bold mb-4">Ofek Shpirer</h1>
    <p className="text-base sm:text-xl mb-4">Full Stack Developer</p>
    <p className="text-sm sm:text-lg max-w-md sm:max-w-xl mb-6">
      Crafting performant web applications using React, Node.js, and MongoDB.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      {/* View Projects Button */}
      <a
        href="#projects"
        className="w-full sm:w-auto text-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition text-base leading-tight"
        style={{ minHeight: "48px", lineHeight: "1.25rem" }}
      >
        View Projects
      </a>

      {/* View CV Button */}
      <a
        href="/OfekShpirerCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-pink-600 transition text-base leading-tight"
        style={{ minHeight: "48px", lineHeight: "1.25rem" }}
      >
        📄 View CV
      </a>
    </div>
  </section>
);

export default Hero;
