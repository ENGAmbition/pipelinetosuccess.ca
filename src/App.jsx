import React from 'react';

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-screen-lg lg:ml-50"> 
      <section className="bg-white py-20">
        <div className="container mx-auto pl-4 lg:pl-0">
          <h2 className="text-gray-600 font-medium text-center mb-4">About</h2> {/* Change text color to pink */}
          
          <h2 className="text-3xl font-semibold mb-4 text-center">
            <span className="font-bold">Discover Our </span>
            <span style={{backgroundImage: 'linear-gradient(to right, #3988F7, #52CEE7)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 'bold'}}>
              Identity
            </span>
          </h2>
          
          <h2 className="text-gray-600 font-medium text-center mb-4">To Strive. To Create. To Serve. By Gryphons, For Gryphons</h2> {/* Change text color to pink */}
          
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-semibold mb-4 ">About Us!</h2> {/* Change text color to pink */}
              <p className="text-base leading-relaxed mb-6 text-left text-gray-600"> {/* Change text color to pink */}
                Established by Katherine Yu, Pipeline to Success stands as a beacon for students navigating the transition from university life to their future careers. As an official student organization, we're committed to guiding you through the pivotal moments of your academic journey.
              </p>
              <h2 className="text-3xl font-semibold mb-4 ">Our Mission!</h2> {/* Change text color to pink */}
              <p className="text-base leading-relaxed mb-6 text-left text-gray-600"> {/* Change text color to pink */}
                Our mission is to create essential links that advance students towards their career ambitions. We provide a variety of programs aimed at offering practical, real-world experiences in clinical and research settings. Each initiative is thoughtfully designed to offer meaningful support that enriches students' academic paths.
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col items-center">
              <div className="mb-6">
                <img className="w-50 h-40 rounded-lg" src="image3.jpg" alt="Team Member 1" />
              </div>

              <div className="flex justify-between mt-4">
                <img className="w-55 h-55 rounded-lg" src="image1.jpg" alt="Image 1" />
                <div className="mx-4"></div> {/* Utilizing Tailwind spacing utility */}
                <img className="w-60 h-55 rounded-lg" src="image2.jpg" alt="Image 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
