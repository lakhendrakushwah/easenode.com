import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Blogs() {
  const blogs = [
    {
      src: "/images/blogs/blog-0.png",
      title:
        "The Importance of Effective Spend Management for Businesses",
      des: "Effective spend management is a critical aspect of running a successful business. It involves strategically planning, monitoring, and controlling expenses to optimize financial resources. In this blog post... ",
      url:"https://easexpenses.wordpress.com/2023/08/14/unveiling-the-significance-of-effective-spend-management-for-business-success/"
    },
    {
      src: "/images/blogs/blog-1.png",
      title:
        "Unlocking Business Growth with SaaS Management ",
      des: "Software-as-a-Service (SaaS) applications have become integral to the success of modern businesses. However, effectively managing multiple SaaS subscriptions and ensuring their optimal utilization can be a challenge..... ",
      url:"https://easexpenses.wordpress.com/2023/08/14/accelerating-business-growth-through-effective-saas-management/"
    },
    {
      src: "/images/blogs/blog-4.png",
      title: "Cost Optimization and Analysis",
      des: "Cost optimization and analysis are paramount for businesses aiming to enhance profitability and drive efficiency. With Easenode Tech's comprehensive solutions, businesses can gain deeper insights into their software spend, negotiate better deals with vendors, track expenses in real-time.... ",
      url:"https://easexpenses.wordpress.com/2023/08/14/unveiling-the-power-of-cost-optimization-and-analysis-for-business-success/"
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
                  <Link to={blog.url} className="text-[#666666] font-medium">Read More</Link>
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
          <Link to="https://easexpenses.wordpress.com/" className="text-main inline-block  text-lg font-medium hover:bg-main hover:text-light border border-main rounded-xl py-5 px-10 transition-all duration-300">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
