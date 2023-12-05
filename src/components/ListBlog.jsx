import { styles } from "../styles";
import { blogs } from "../data";
import { Link } from "react-router-dom";

const ListBlog = () => {
  return (
    <>
      <section className="pt-[1px] bg-gradient-to-l from-slate-950 via-slate-800 to-slate-950 to-60%">
        <div className={styles.warpBlog}>
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
              <h5 className="mb-2 sm:text-xl text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <Link to={`/blogs/${blog.id}`}>
                <button
                  type="button"
                  className="group text-indigo-400 font-thin rounded-lg sm:text-sm text-xs text-center inline-flex items-center hover:underline underline-offset-4"
                >
                  Show detail blog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ml-2 group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ListBlog;
