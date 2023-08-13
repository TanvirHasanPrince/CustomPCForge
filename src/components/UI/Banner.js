import React from "react";
import Lottie from "lottie-react";
import bannerAnimation from "../../assets/banner/animation_ll8l2on9.json";
import Typewriter from "typewriter-effect";


const Banner = () => {
  return (
 
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 py-20">
            <div className="bg-base rounded-xl flex items-center justify-center">
              <Lottie animationData={bannerAnimation} loop={true} />
            </div>
            <div className="font-courier ">
              <h1 className="lg:text-7xl md:text-5xl text-2xl text-center ">
                Empowering Your Digital Vision.
                <span className="text-accent text-3xl">
                  <Typewriter
                    options={{
                      strings: ["One Component at a Time!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <br></br>
              <p className=" text-sm lg:text-lg text-center">
                Welcome to CustomPCForge, your ultimate destination for building
                the PC of your dreams! Explore a wide range of high-quality PC
                parts and components, carefully curated to empower your
                creativity and performance needs. Our user-friendly PC Builder
                tool lets you craft a custom rig with ease, while our expert
                guides and community insights ensure you&apos;re making informed
                decisions every step of the way. Unleash your imagination and
                assemble the perfect PC that suits your style and ambitions.
                Start building today and elevate your computing experience!
              </p>
            </div>
          </div>
   
  );
};

export default Banner;
