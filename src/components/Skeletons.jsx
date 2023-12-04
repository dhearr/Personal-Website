/* eslint-disable react/jsx-key */
import Skeleton from "./Skeleton";
import { styles } from "../styles";

const Skeletons = () => {
  const item = [<Skeleton />, <Skeleton />, <Skeleton />];
  const itemList = [];
  item.forEach((data, index) => {
    itemList.push(<div key={index}>{data}</div>);
  });
  return (
    <>
      <section className={styles.headerBlog}>
        <h1 className="sm:text-[60px] text-[35px] font-black z-10 relative">
          <span className="relative inline-block px-[2px]">
            <div className="absolute inset-0 transform -skew-y-[3deg] h-3 top-[30px] sm:top-[58px] bg-gradient-to-r from-indigo-300/70"></div>
            <span className="relative text-white">Blog</span>
          </span>
        </h1>
        <h2 className="sm:text-[30px] text-[20px] font-bold mt-4 z-10 relative">
          Dhea Ramdani.
        </h2>
        <p className="max-w-xl sm:text-[24px] text-[14px] z-10 relative text-indigo-100">
          happy the world of programming, especially front end developer want to
          become an expert in the field of software engineering and front-end
          developer
        </p>
        <p className="mt-4 underline sm:text-[16px] text-[12px] underline-offset-4 z-10 relative text-indigo-400">
          Full Profile
        </p>
        <div className="bg-gradient-to-b from-slate-800 via-transparent to-slate-950 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section className="pt-[1px] bg-gradient-to-l from-slate-950 via-slate-800 to-slate-950 to-60%">
        <div className={styles.warpBlog}>{itemList}</div>
      </section>
    </>
  );
};

export default Skeletons;
