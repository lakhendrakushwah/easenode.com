import { Link } from "react-router-dom";
import Company from "./Company";

function Hero() {
  return (
    <div className="bg-none lg:bg-no-repeat lg:bg-fit lg:bg-right lg:bg-hero-pattern relative pt-8 md:pt-14 lg:pt-20">
      <div className="container flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-5/12 ">
          <h1 className="text-[30px] md:text-[40px] font-bold md:pb-4">
            Maximize Business Potential with Cutting-Edge SaaS
          </h1>
          <p className="text-[#999999] text-sm md:text-base px-2 pb-8 lg:pb-16 max-w-prose">
            Empower your business with innovative software solutions for
            exponential growth and efficiency
          </p>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="hover:text-main inline-block text-md  lg:text-lg font-medium hover:bg-transparent bg-main text-light border border-main rounded-xl py-5 px-8 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link className="text-main inline-block  text-md  lg:text-lg font-medium hover:bg-main hover:text-light border border-main rounded-xl py-5 px-8 transition-all duration-300">
              Explore more
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <div>
            <img className="w-full" src="/images/hero.png" alt="" />
          </div>
        </div>
      </div>
      <Company />
    </div>
  );
}

export default Hero;
