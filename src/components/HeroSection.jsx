export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-64 pt-8  md:space-x-3">
      <div className="space-y-6 text-center md:text-left">
        <button className="bg-purple-200 text-purple-400 rounded-md py-1 px-2">
          Create your own
        </button>
        <h1 className="text-4xl md:text-7xl font-bold">
          Make the most <span className="block"> of o</span>
          Printing
        </h1>
        <p className="px-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tempora dolor nisi nostrum eos iure quaerat unde ex non at deserunt,
          rem, illum hic vero sint quibusdam adipisci similique. Magni similique
          sunt tempore molestiae enim cumque dolores ullam necessitatibus
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4">
          <p>
            {" "}
            <button className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-emerald-500">
              Shop Now
            </button>
          </p>
          <p>
            {" "}
            <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition duration-300">
              How we work
            </button>
          </p>
        </div>
      </div>
      <div className="shrink-0 overflow-hidden ">
        <img
          src="../src/assets/Item → slideshow-21.png.jpg"
          alt=""
          className="w-[40rem] overflow-hidden"
        />
      </div>
    </section>
  );
}
