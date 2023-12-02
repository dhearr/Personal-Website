import { Link } from "react-router-dom";
import { blogs } from "../data";
const Blog = () => {
  return (
    <>
      <section className="bg-slate-950 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] p-6 sm:px-20 sm:py-12 md:px-44 md:py-16 w-full z-10 relative">
        <h1 className="sm:text-[60px] text-[35px] font-black z-10 relative">
          <span className="relative inline-block px-[2px]">
            <div className="absolute inset-0 transform -skew-y-[3deg] h-3 top-[30px] sm:top-[58px] bg-gradient-to-r from-indigo-300/70"></div>
            <span className="relative text-white">Blog</span>
          </span>
        </h1>
        <h2 className="sm:text-[30px] text-[20px] font-bold mt-4 z-10 relative">
          Dhea Ramdani.
        </h2>
        <p className="max-w-md sm:text-[24px] text-[14px] z-10 relative text-indigo-100">
          happy the world of programming, especially front end developer want to
          become an expert in the field of software engineering and front-end
          developer
        </p>
        <Link to="/">
          <p className="mt-4 underline sm:text-[16px] text-[12px] underline-offset-4 z-10 relative text-indigo-400">
            Full Profile
          </p>
        </Link>
        <div className="bg-gradient-to-b from-slate-800 via-transparent to-slate-950 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section className="pt-[1px] bg-gradient-to-l from-slate-950 via-slate-800 to-slate-950 to-60%">
        <div className="bg-slate-950 flex flex-col sm:grid sm:grid-cols-2 gap-5 px-6 py-16 sm:px-20 sm:py-12 md:px-44 md:py-16">
          {blogs.map((blog) => (
            <div key={blog.id} className="max-w-sm mb-4">
              <h5 className="mb-2 text-xs opacity-60 text-indigo-300">
                {blog.data}
              </h5>
              <p className="mb-5 text-indigo-100 sm:text-lg text-sm">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar2 inline-flex mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </span>
                {blog.date}
              </p>
              <h5 className="mb-2 sm:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <Link to={`/blogs/${blog.id}`}>
                <p className="text-indigo-400 text-sm sm:text-lg">
                  lihat detail
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
