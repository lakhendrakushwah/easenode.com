import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [footerOne, setFooterOne] = useState(false);
  const [footerTwo, setFooterTwo] = useState(false);
  const [footerThree, setFooterThree] = useState(false);
  return (
    <div className="bg-[#E6E6E6]">
      <div className="container py-8 md:py-24 flex flex-col md:flex-row justify-between">
        <div className="flex-1 md:w-1/2 flex flex-col ">
          <h3 className="text-3xl font-bold pb-2">EASEXPENSE</h3>

          <p className="text-sm text-[#999999] pb-8 w-auto md:max-w-prose">
            Easenode Tech Private Limited is a dynamic and innovative technology
            company focused on offering a centralized platform for managing
            their SaaS subscriptions and expenses.
          </p>

          <ul className="flex gap-7 pb-14">
            <li>
              <a href="#">
                <span className="text-[#999999] text-3xl">
                  <i className="fab fa-facebook"></i>
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="text-[#999999] text-3xl">
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="text-[#999999] text-3xl">
                  <i className="fa-brands fa-youtube"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col md:flex-row justify-between  gap-10">
          <div>
            <div
              className="flex justify-between"
              onClick={() => setFooterOne(!footerOne)}
            >
              <h6 className="text-xl font-bold  mb-5">Quick Links</h6>

              <span className="md:hidden">
                <i
                  className={`${
                    footerOne
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }`}
                ></i>
              </span>
            </div>

            <ul
              className={`flex-col gap-5 md:flex   ${
                footerOne ? "flex" : "hidden"
              }`}
            >
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  FAQS
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div
              className="flex justify-between"
              onClick={() => setFooterTwo(!footerTwo)}
            >
              <h6 className="text-xl font-bold  mb-5">Product</h6>

              <span className="md:hidden">
                <i
                  className={`${
                    footerTwo
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }`}
                ></i>
              </span>
            </div>

            <ul
              className={`flex-col gap-5 md:flex   ${
                footerTwo ? "flex" : "hidden"
              }`}
            >
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Personal
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div
              className="flex justify-between"
              onClick={() => setFooterThree(!footerThree)}
            >
              <h6 className="text-xl font-bold  mb-5">Legal</h6>

              <span className="md:hidden">
                <i
                  className={`${
                    footerThree
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }`}
                ></i>
              </span>
            </div>
            <ul
              className={`flex-col gap-5 md:flex   ${
                footerThree ? "flex" : "hidden"
              }`}
            >
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  GDPR
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Terms of service
                </a>
              </li>
              <li>
                <a className="text-[#666] text-sm font-poppins" href="#">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
