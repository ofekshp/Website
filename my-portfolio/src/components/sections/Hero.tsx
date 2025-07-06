const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-4 sm:p-8">
    <h1 className="text-5xl sm:text-6xl font-bold mb-4">Ofek Shpirer</h1>
    <p className="text-base sm:text-xl mb-4">Full Stack Developer</p>
    <p className="text-sm sm:text-lg max-w-md sm:max-w-xl mb-6">
      Crafting performant web applications using React, Node.js, and MongoDB.
    </p>
    <a
      href="#projects"
      className="bg-white text-gray-900 px-6 py-3 w-full sm:w-auto rounded-full font-semibold hover:bg-gray-200 transition"
    >
      View Projects
    </a>
  </section>
);

export default Hero;
