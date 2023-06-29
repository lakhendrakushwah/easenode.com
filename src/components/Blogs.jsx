import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Blogs() {
  const blogs = [
    {
      src: "/images/blogs/blog-1.png",
      title:
        "Simplifying SaaS Management: How Easenode Streamlines Your Subscription Management Process",
      des: "Discover how Easenode simplifies the management of multiple SaaS subscriptions, saving you time and effort. Learn about its centralized platform and features that make subscription management a breeze..",
    },
    {
      src: "/images/blogs/blog2.png",
      title:
        "Optimize Your SaaS Expenses with Easenode: Unlock Cost Savings",
      des: "Explore how Easenode helps businesses optimize their SaaS expenses. Learn about its spend analysis capabilities, identifying underutilized subscriptions, and negotiating better pricing to achieve significant cost savings...",
    },
    {
      src: "/images/blogs/blog-3.png",
      title: "Scale Your SaaS Infrastructure with Easenode: Empower Business Growth",
      des: "See how Easenode supports businesses in scaling their SaaS infrastructure seamlessly. Discover its features for easy onboarding, streamlined provisioning and deprovisioning, and efficient collaboration to enable your business to grow without limitations...",
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const increment = () => {
    if (blogs.length - 1 > currentItem) {
      setCurrentItem(currentItem + 1);
    } else {
      setCurrentItem(0);
    }
  };

  const decrement = () => {
    if (currentItem == 0) {
      setCurrentItem(blogs.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((currentItem + 1) % blogs.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentItem, blogs.length]);

  return (
    <div className="bg-[#FAFAFA] py-10 md:py-20" id="blog-section-id">
      <div className="container">
        <div className="m-auto w-full md:w-1/2 text-center mb-8 md:mb-20">
          <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
            Our Blog
          </h2>
          <p className="text-[#999999] text-sm md:text-base px-2">
            Experience the Convenience and Versatility of Our Expansive
            Marketplace, Offering a Vast Array of Cutting-Edge SaaS Solutions to
            Fuel Your Business Success
          </p>
        </div>
        <div>
          <div
            className={`grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 relative lg:gap-10 pb-10 md:pb-20`}
          >
            {blogs.map((blog, i) => (
              <div
                key={i}
                className={`bg-light rounded-3xl p-6 ${
                  i == currentItem ? "max-md:block" : "max-md:hidden"
                } w-full`}
              >
                <img
                  className="w-full rounded-2xl pb-4"
                  src={blog.src}
                  alt={blog.title}
                />
                <h2 className="text-2xl font-semibold pb-6">{blog.title}</h2>
                <p className="text-[#999999]">
                  {blog.des}
                  <Link className="text-[#666666] font-medium">Read More</Link>
                </p>
              </div>
            ))}

            <div className="flex justify-between md:hidden py-5">
              <div
                onClick={increment}
                className=" text-xl bg-main bg-opacity-10 text-main rounded-full w-10 h-10 flex justify-center items-center absolute top-1/2 -left-5"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div
                onClick={decrement}
                className=" text-xl bg-main bg-opacity-10 text-main rounded-full w-10 h-10 flex justify-center items-center absolute top-1/2  -right-5"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link className="text-main inline-block  text-lg font-medium hover:bg-main hover:text-light border border-main rounded-xl py-5 px-10 transition-all duration-300">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
