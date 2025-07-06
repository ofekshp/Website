const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-8">
    <h1 className="text-5xl font-bold mb-4">Ofek Shpirer</h1>
    <p className="text-xl mb-6">Full Stack Developer</p>
    <p className="text-lg max-w-xl mb-6">
      Crafting performant web applications using React, Node.js, and MongoDB.
    </p>
    <a
      href="#projects"
      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      View Projects
    </a>
  </section>
);

export default Hero;
