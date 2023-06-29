import { Link } from "react-router-dom";

function Help() {
  const blogs = [
    {
      src: "/images/helps/help-1.png",
      title: "Effortlessly Streamline Operations, Boost Efficiency",
      des: "Unlock time savings and cost reduction by automating administrative tasks and integrating seamless exports to your preferred accounting platforms.",
    },
    {
      src: "/images/helps/help-2.png",
      title: "Discover the perfect SaaS solution in one marketplace",
      des: "Navigate our SaaS marketplace to taht find the ideal cross-platform market place solutions for your business, empowering you to reach new heights quickly.",
    },
    {
      src: "/images/helps/help-3.png",
      title: "Analyse your expenditure, optimise costs for growth",
      des: "Centralise and analyse your purchase and spending data, enabling you to make informed decisions, optimise costs, eliminate unnecessary expenses.",
    },
  ];
  return (
    <div className="bg-[#FAFAFA] py-10 md:py-20">
      <div className="container">
        <div className="mb-8 md:mb-20">
          <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
            How we help you
          </h2>
          <p className="text-[#999999] text-sm md:text-base px-2 max-w-prose md:w-1/2">
            Driving your success through tailored solutions and unmatched
            expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-light rounded-3xl p-6">
              <img
                className="w-full rounded-2xl pb-4"
                src={blog.src}
                alt={blog.title}
              />
              <h2 className="text-2xl font-semibold pb-6">{blog.title}</h2>
              <p className="text-[#999999] pb-6">{blog.des}</p>
              <Link className="text-main block text-center text-sm font-medium hover:bg-main hover:text-light border border-main rounded-xl py-5 px-10 transition-all duration-300">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;
