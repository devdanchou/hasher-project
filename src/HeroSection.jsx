const HeroSection = () => {
  return (
    <div className="flex justify-center px-4 py-32 md:py-40 border border-red-300">
      <div className="flex flex-col-reverse items-center justify-center w-full max-w-6xl md:flex-row">
        <div>
          <div className="font-ubuntu text-violet-800 font-medium text-4xl md:text-5xl">
            Something <span className="text-yellow-500">Catchy</span> and {" "}
            <span className="text-red-500">Technological</span>
          </div>
          <button className="text-violet-800 border-4 border-violet-800 text-2xl py-3 px-12 font-medium my-10">
            Learn More
          </button>
        </div>
        <img
        className="md:w-[420px] lg:w-[680px] mb-12"
        src="https://static-task-assets.react-formula.com/963190.png" />
      </div>
    </div>
  );
};

export default HeroSection;
