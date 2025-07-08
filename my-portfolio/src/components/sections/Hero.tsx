const Hero = () => (
  <section
    id="hero"
    className="min-h-[75vh] flex flex-col justify-center items-center bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-brown-900 text-center p-4 sm:p-8 space-y-6"
  >
    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-amber-800 mb-2">
      Ofek Shpirer
    </h1>

    <p className="text-base sm:text-xl text-amber-700 font-medium mb-4">
      Full Stack Developer
    </p>

    <p className="text-sm sm:text-lg max-w-md sm:max-w-xl text-brown-700 leading-relaxed">
      Crafting fast, scalable web apps using React, Node.js, and MongoDB.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 animate-fadeInUp">
      {/* View Projects Button */}
      <a
        href="#projects"
        className="group relative overflow-hidden rounded-full bg-white py-3 px-6 w-full sm:w-auto text-center font-semibold text-amber-800 border border-amber-300 shadow-sm hover:shadow-md transition"
        style={{ minHeight: "48px" }}
      >
        <span className="relative z-10 group-hover:text-yellow-600 transition">
          🚀 View Projects
        </span>
        <span className="absolute left-0 top-0 h-full w-0 bg-amber-100 transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
      </a>

      {/* View CV Button */}
      <a
        href="/OfekShpirerCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-6 py-3 w-full sm:w-auto text-center font-semibold text-white shadow-lg hover:from-yellow-700 hover:to-amber-600 transition transform hover:scale-105"
        style={{ minHeight: "48px" }}
      >
        📄 View CV
      </a>
    </div>
  </section>
);

export default Hero;
