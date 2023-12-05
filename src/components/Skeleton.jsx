import { blogs } from "../data";
import { styles } from "../styles";

const Skeleton = () => {
  return (
    <>
      <section className="pt-[1px] bg-gradient-to-l from-slate-950 via-slate-800 to-slate-950 to-60%">
        <div className={styles.warpBlog}>
          {blogs.map((blog, index) => (
            <div key={index} className="max-w-sm  mb-4 overflow-hidden">
              <div className={styles.skeletonData}>{blog.data}</div>
              <div className={styles.skeletonDate}>{blog.date}</div>
              <div className={styles.skeletonTitle}>{blog.title}</div>
              <div className={styles.skeletonButton}>{blog.date}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skeleton;
