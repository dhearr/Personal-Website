const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-6",

  // Start Style Section Hero and Home
  sectionHero: "bg-[#091F2A] bg-hero-pattern bg-cover overflow-hidden",
  wrapperHero:
    "h-screen w-full flex flex-col justify-center items-center relative z-10",
  authorName: "leading-none font-rubik text-[55px] sm:text-[80px]",
  authorTitle: "leading-none font-rubik text-[28px] sm:text-[50px]",
  bgGradient:
    "bg-gradient-to-bl from-zinc-900 w-full h-screen absolute top-0 left-0 z-0",
  menuTitle:
    "group text-[17px] sm:text-[23px] text-center mt-5 hover:scale-125 cursor-pointer font-rubik",
  arrowTitle:
    "hidden group-hover:inline-flex group-hover:animate-pulse mr-2 group-hover:text-sky-700",
  // End Start Style Section Hero and Home

  // Start Style Notif Toast
  notifToast:
    " relative flex p-4 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer",
  // Start Style Notif Toast

  // Start Style About
  sectionDetail:
    "sm:px-16 px-6 sm:py-16 py-6 bg-[#091F2A] bg-hero-pattern bg-cover overflow-hidden w-full transition-all duration-700",
  cardDetail:
    "max-w-3xl lg:max-w-4xl transition-all duration-700 mx-auto border border-[#113344] relative z-10 px-5 sm:px-10 pt-16 pb-10 rounded-lg bg-[#092531] shadow-xl",
  line: "h-1 w-12 tracking-wider leading-6 bg-[#0369a1] my-3 sm:my-5 border-0 rounded-full",
  borderCard:
    "p-[1px] bg-gradient-to-br from-[#0d4866] to-[#092b3a] to-50% rounded-xl mt-2",
  card: "flex flex-col sm:flex-row p-7 rounded-xl bg-[#092b3a] drop-shadow-xl",
  buttonBack:
    "absolute bg-[#092B3A] top-0 left-0 flex items-center px-3 py-3 rounded-br-lg rounded-tl-lg shadow-xl",

  // End Style About

  skeletonData:
    "mb-2 animate-pulse bg-gray-300 h-2.5 w-8 rounded-full text-white/0",
  skeletonDate:
    "mb-5 animate-pulse bg-gray-300 h-3 w-40 rounded-full text-white/0",
  skeletonTitle:
    "mb-2 animate-pulse bg-gray-300 h-4 max-w-sm rounded-full text-white/0",
  skeletonButton:
    "animate-pulse bg-gray-300 h-2.5 w-32 rounded-full text-white/0",

  headerBlog:
    "bg-slate-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] p-6 sm:px-20 sm:py-12 md:px-44 md:py-16 w-full z-10 relative",

  warpBlog:
    "bg-slate-950 flex flex-col sm:grid sm:grid-cols-2 gap-5 px-6 py-16 sm:px-20 sm:py-12 md:px-44 md:py-16",
};

export { styles };
