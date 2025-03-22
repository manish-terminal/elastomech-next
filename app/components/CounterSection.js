import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <div className="bg-cover bg-center py-10 px-4 md:py-20 md:px-12 lg:py-[120px] lg:px-[10em] bg2 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-10 lg:space-y-0">
          {/* Left Section */}
          <div className="text-left lg:w-1/2">
            <span className="text-[#ffda31] font-semibold text-lg">
              Number Talks
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
              Elastomech will help you get your <br /> ideas into complete reality.
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Our team at Elastomech is dedicated to turning your ideas into reality with precision and expertise.
            </p>

            {/* Optional Button */}
            <div className="mt-4">
              <button className="bg-[#ffda31] text-[#010d14] font-semibold py-3 px-6 rounded-md hover:bg-[#fff] transition-colors duration-300">
                Contact Now
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-0">
            {/* Counter Item */}
            <div
              className="bg-[#ffda31] bg-opacity-20 rounded-md text-center text-white py-8"
              style={{
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`,
              }}
            >
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                <CountUp start={0} end={134} duration={2.5} />
                <span className="prefix">+</span>
              </div>
              <span className="text-sm uppercase">Completed Projects</span>
            </div>

            <div
              className="bg-[#ffda31] bg-opacity-20 rounded-md text-center text-white py-8"
              style={{
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`,
              }}
            >
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                <CountUp start={0} end={98} duration={2.5} />
                <span className="prefix">+</span>
              </div>
              <span className="text-sm uppercase">Happy Clients</span>
            </div>

            <div
              className="bg-[#ffda31] bg-opacity-20 rounded-md text-center text-white py-8"
              style={{
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`,
              }}
            >
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                <CountUp start={0} end={800} duration={2.5} />
                <span className="prefix">+</span>
              </div>
              <span className="text-sm uppercase">Parts Developed</span>
            </div>

            <div
              className="bg-[#ffda31] bg-opacity-20 rounded-md text-center text-white py-8"
              style={{
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`,
              }}
            >
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                <CountUp start={0} end={39} duration={2.5} />
                <span className="prefix">+</span>
              </div>
              <span className="text-sm uppercase">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
