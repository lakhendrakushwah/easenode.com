
function Contact() {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="bg-none lg:bg-no-repeat lg:bg-fit lg:bg-center lg:bg-hero-pattern relative py-5 md:py-10 lg:py-20">
          <div className="container flex flex-col lg:flex-row items-center gap-10">
            <div className="bg-light p-8 m-auto w-full md:w-10/12 lg:w-9/12 rounded-3xl">
              <div className="mb-4 md:mb-8">
                <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
                  Get in Touch with Us
                </h2>
                <p className="text-[#999999] text-sm md:text-base px-2 max-w-prose md:w-1/2">
                  We're here to assist you. Reach out to our friendly team for
                  any inquiries or support
                </p>
              </div>

              <div>
                <form action="">
                  <div className="flex flex-col lg:flex-row gap-5 pb-5">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5 pb-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-5 pb-4">
                    <div className="flex-1">
                      <textarea
                        type="text"
                        rows="4"
                        placeholder="Message"
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="hover:text-main inline-block  text-lg font-medium hover:bg-transparent bg-main text-light border border-main rounded-xl py-5 px-20 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
