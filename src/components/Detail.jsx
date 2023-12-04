import { Link, useParams } from "react-router-dom";
import { blogs } from "../data";

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
          <Link to="/blogs">
            <button
              type="button"
              className="group text-indigo-400 font-normal rounded-lg sm:text-lg text-sm text-center inline-flex items-center hover:underline underline-offset-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left mr-2 group-hover:-translate-x-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              Back to blog
            </button>
          </Link>
        </div>
        <h1 className="text-sm font-normal text-indigo-300 z-10 relative">
          {data}
        </h1>
        <p className="max-w-md min-w-fit sm:text-[34px] mt-4 text-[24px] font-semibold z-10 relative text-white text-center">
          {title}
        </p>
        <p className="mt-5 text-indigo-200 sm:text-lg text-sm max-w-md min-w-fit">
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
          {date}
        </p>
        <div className="bg-gradient-to-b from-slate-800 via-transparent to-slate-950 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section className="pt-[2px] bg-gradient-to-l from-slate-950 from-20% via-slate-800 to-slate-950 to-80%">
        <div className="bg-slate-950 px-6 py-16 sm:px-20 sm:py-12 md:px-44 md:py-16">
          <div className="flex justify-center py-16 px-4">
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
