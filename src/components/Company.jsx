import React from "react";

function Company() {
  return (
    <div className="container">
      <h4 className="text-[#999999] text-lg pt-10 md:pt-20 lg:pt-32 pb-10 text-center">
        Trusted by 1k+ companies
      </h4>
      <div className="flex flex-row flex-wrap gap-10">
        <div className="flex-shrink-1 flex-grow basis-1/4 lg:basis-[15%] flex justify-center items-center">
          <img
            className=""
            src="/images/companies/company-1.png"
            alt="company"
          />
        </div>

        <div className="flex-shrink-1 flex-grow basis-1/4 lg:basis-[15%] flex justify-center items-center">
          <img
            className=""
            src="/images/companies/company-2.png"
            alt="company"
          />
        </div>

        <div className="flex-shrink-1 flex-grow basis-1/4 lg:basis-[15%] flex justify-center items-center">
          <img
            className=""
            src="/images/companies/company-3.png"
            alt="company"
          />
        </div>

        <div className="flex-shrink-1 flex-grow basis-1/4 lg:basis-[15%] flex justify-center items-center">
          <img
            className=""
            src="/images/companies/company-4.png"
            alt="company"
          />
        </div>

        <div className="flex-shrink-1 flex-grow basis-1/4 lg:basis-[15%] flex justify-center items-center">
          <img
            className="w-8/12"
            src="/images/companies/company-5.png"
            alt="company"
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
