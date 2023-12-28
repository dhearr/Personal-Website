import { Link, useParams } from "react-router-dom";
import { blogs } from "../data";
import { GoArrowLeft } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

const Detail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  const {
    data,
    date,
    title,
    paragrap1,
    paragrap2,
    paragrap3,
    paragrap4,
    paragrap5,
    footer,
  } = blog;

  return (
    <>
      <section className="bg-slate-950 p-20 sm:px-20 sm:py-20 md:px-44 md:py-24 w-full z-10 relative justify-center items-center flex flex-col">
        <div className="flex justify-start absolute top-7 left-6 sm:top-10 sm:left-12 z-10">
          {/* Start Button Back */}
          <Link
            to="/blogs"
            className="inline-flex items-center text-indigo-400 text-sm"
          >
            <span className="text-lg inline-flex mr-1">
              <GoArrowLeft />
            </span>
            Kembali
          </Link>
          {/* End Button Back */}
        </div>
        <h1 className="text-sm font-normal text-indigo-300 z-10 relative">
          {data}
        </h1>
        <p className="max-w-md min-w-fit sm:text-[34px] mt-4 text-[24px] font-semibold z-10 relative text-white text-center">
          {title}
        </p>
        <p className="inline-flex items-center mt-5 text-indigo-200 sm:text-lg text-sm max-w-md min-w-fit">
          <span className="mr-1">
            <MdDateRange />
          </span>
          {date}
        </p>
        <div className="bg-gradient-to-b from-slate-800 via-transparent to-slate-950 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section className="pt-[2px] bg-gradient-to-l from-slate-950 from-20% via-slate-800 to-slate-950 to-80%">
        <div className="bg-slate-950 px-6 py-16 sm:px-20 sm:py-12 md:px-44 md:py-16">
          <div className="flex justify-center py-8 px-4">
            <article className="mx-auto space-y-5 text-indigo-100 leading-7">
              <p
                className="max-w-2xl"
                dangerouslySetInnerHTML={{ __html: paragrap1 }}
              ></p>
              <p
                className="max-w-2xl"
                dangerouslySetInnerHTML={{ __html: paragrap2 }}
              ></p>
              <p
                className="max-w-2xl"
                dangerouslySetInnerHTML={{ __html: paragrap3 }}
              ></p>
              <p
                className="max-w-2xl"
                dangerouslySetInnerHTML={{ __html: paragrap4 }}
              ></p>
              <p
                className="max-w-2xl"
                dangerouslySetInnerHTML={{ __html: paragrap5 }}
              ></p>
              <p
                className="max-w-2xl"
                dangerouslySetInnerHTML={{ __html: footer }}
              ></p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
