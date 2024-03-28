import { FC } from "react";
import { GradientText } from "pipeline-components";

const HeroSection: FC = () => {
  return (
    <section className="bg-white px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center justify-center">
          <div style={{ maxWidth: '35%' }}> {/* 30% reduced width */}
            <h1 className="text-4xl font-bold mb-4 text-black">
              Building <GradientText>Bridges</GradientText> from Academia to Real-World <GradientText>Success</GradientText>
            </h1>
            <p className="text-xl mb-8 text-gray-00">
              Empowering Guelph's students through practical experience and career development.
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center md:justify-start"> {/* Center buttons on small screens, align start on md screens */}
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Get Started
            </button>
            <button className="bg-transparent text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <img 
            src="/images/hero/image.png" 
            alt="Two professionals having a discussion at a table" 
            className="rounded-lg"
            style={{ maxWidth: '70%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
