import { styles } from "../styles";
import { blogs } from "../data";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { useSoundManager } from "../utils/soundManager";

export default function ListBlog() {
  const { playAccent } = useSoundManager();
  return (
    <>
      <section className="pt-[1px] bg-gradient-to-l from-slate-950 via-slate-800 to-slate-950 to-60%">
        <div className={styles.warpBlog}>
          {blogs.map((blog) => (
            <div key={blog.id} className="max-w-sm mb-4">
              <h5 className="mb-2 text-xs opacity-60 text-indigo-300">
                {blog.data}
              </h5>
              <p className="inline-flex items-center mb-5 text-indigo-100 sm:text-lg text-sm">
                <span className="mr-1">
                  <MdDateRange />
                </span>
                {blog.date}
              </p>
              <h5 className="mb-2 sm:text-xl text-lg font-semibold leading-7 sm:leading-10  tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <Link to={`/blogs/${blog.id}`} onClick={playAccent}>
                <button
                  type="button"
                  className="group text-indigo-400 font-thin rounded-lg sm:text-sm text-xs text-center inline-flex items-center hover:underline underline-offset-4"
                >
                  Show detail blog
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
