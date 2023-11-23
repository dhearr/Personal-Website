const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 py-[100px]",

  bgHero: "bg-gradient-to-b from-[#B3DDEB] from-10% to-[#E3F5FB] relative",
  bgExperience:
    "bg-gradient-to-b from-[#03222C] from-100%  to-[#400C1C] py-0 px-0 sm:py-28 sm:px-10 relative",
  borderExperience:
    "bg-gradient-to-br from-[#044d6e] via-transparent to-[#044d6e] pt-[3px] sm:p-[2px] rounded-none sm:rounded-3xl",
  warpExperience:
    "bg-gradient-to-br from-[#081E25] to-[#011218] relative rounded-none sm:rounded-3xl",
  bgProject:
    "bg-gradient-to-b from-[#03222C] via-[#400C1C] to-[#310713] to-40% py-0 px-0 sm:py-28 sm:px-10",
  borderProject:
    "bg-gradient-to-br from-[#881337] via-transparent to-[#881337] pt-[3px] sm:p-[2px] rounded-none sm:rounded-3xl",
  wrapperCalendar:
    "max-w-7xl flex justify-start items-start rounded-lg bg-gradient-to-br from-zinc-950 via-rose-950 to-zinc-950 p-4",
  borderCalendar:
    "p-[1px] bg-gradient-to-br from-[#881337] via-transparent to-[#881337] mt-5 rounded-lg",

  borderHeadCalendar:
    "p-[1px] bg-gradient-to-br from-[#881337] via-transparent to-[#881337] rounded-lg",

  bgHeadCalendar:
    "bg-gradient-to-br from-zinc-950 via-rose-950 to-zinc-950 p-4 rounded-lg w-full",

  textCalendar: "text-white-100 font-medium text-[18px]",
  subTextCalendar: "text-green-500 text-[20px] font-bold",

  pathFirstTitle:
    "M10.2629 0.0812639C8.9439 0.303213 7.72882 0.731393 6.76512 1.31433C5.69257 1.96291 0.734984 6.51311 0.307015 7.24166C-0.0758563 7.89351 -0.106283 9.26252 0.24761 9.91541C0.934026 11.1811 2.48906 11.8198 4.02724 11.468C4.86145 11.2772 5.20285 11.0217 7.60186 8.79288C11.5266 5.14653 11.6756 5.13893 15.4234 8.39372C18.9212 11.4314 20.6237 12.1321 24.0697 11.9523C27.1198 11.7931 28.41 11.16 31.8582 8.13084C35.1693 5.22201 35.4854 5.23376 39.1341 8.40184C42.6268 11.4347 44.3305 12.133 47.7954 11.9523C50.8073 11.7951 52.185 11.1184 55.576 8.13118C58.9621 5.14843 59.1338 5.1626 63.2836 8.7706C66.0965 11.2162 67.9423 12 70.888 12C73.9725 12 75.6941 11.2271 78.9864 8.36488C82.5829 5.23808 82.9001 5.22719 86.192 8.12047C89.6139 11.1279 90.9701 11.7951 93.9805 11.9523C97.4472 12.1332 99.1527 11.4345 102.648 8.40132C106.3 5.23203 106.615 5.22011 109.918 8.12825C113.32 11.1238 114.653 11.7858 117.615 11.9513C119.512 12.0573 120.893 11.7834 122.597 10.9631C123.882 10.3445 128.95 5.81393 129.614 4.69003C130.76 2.74914 129.218 0.427573 126.781 0.427573C126.257 0.427573 125.58 0.554697 125.258 0.713429C124.939 0.870607 123.533 2.06188 122.133 3.36092C118.403 6.82194 118.159 6.83369 114.609 3.72209C111.301 0.822417 109.62 0.0541463 106.567 0.044992C103.354 0.0353195 101.749 0.707557 98.7215 3.33225C95.7924 5.87145 95.8947 5.79597 95.1614 5.95384C94.0031 6.2029 93.4243 5.89563 90.8433 3.66077C87.4777 0.746765 85.804 0.00474772 82.6603 0.0327288C79.5196 0.0605372 78.0336 0.732256 74.6696 3.64488C72.0737 5.89235 71.4947 6.20204 70.3484 5.95557C69.5756 5.78923 69.6555 5.84727 66.875 3.43744C63.7545 0.732947 62.1784 0.0498282 59.0251 0.0354922C55.983 0.0215016 54.2164 0.816026 50.9095 3.68582C48.3648 5.89425 47.778 6.20411 46.6146 5.95384C45.8812 5.79597 45.9836 5.87145 43.0544 3.33225C40.0268 0.707557 38.4223 0.0353195 35.2088 0.044992C32.1444 0.0541463 30.5108 0.804972 27.1109 3.767C23.5035 6.90986 23.4414 6.9052 19.153 3.16903C17.3138 1.56668 16.1735 0.861453 14.7431 0.441909C13.4061 0.0496556 11.4074 -0.111149 10.2629 0.0812639Z",

  pathSecondTitle:
    "M10.2629 0.0812639C8.9439 0.303213 7.72882 0.731393 6.76512 1.31433C5.69257 1.96291 0.734984 6.51311 0.307015 7.24166C-0.0758563 7.89351 -0.106283 9.26252 0.24761 9.91541C0.934026 11.1811 2.48906 11.8198 4.02724 11.468C4.86145 11.2772 5.20285 11.0217 7.60186 8.79288C11.5266 5.14653 11.6756 5.13893 15.4234 8.39372C18.9212 11.4314 20.6237 12.1321 24.0697 11.9523C27.1198 11.7931 28.41 11.16 31.8582 8.13084C35.1693 5.22201 35.4854 5.23376 39.1341 8.40184C42.6268 11.4347 44.3305 12.133 47.7954 11.9523C50.8073 11.7951 52.185 11.1184 55.576 8.13118C58.9621 5.14843 59.1338 5.1626 63.2836 8.7706C66.0965 11.2162 67.9423 12 70.888 12C73.9725 12 75.6941 11.2271 78.9864 8.36488C82.5829 5.23808 82.9001 5.22719 86.192 8.12047C89.6139 11.1279 90.9701 11.7951 93.9805 11.9523C97.4472 12.1332 99.1527 11.4345 102.648 8.40132C106.3 5.23203 106.615 5.22011 109.918 8.12825C113.32 11.1238 114.653 11.7858 117.615 11.9513C119.512 12.0573 120.893 11.7834 122.597 10.9631C123.882 10.3445 128.95 5.81393 129.614 4.69003C130.76 2.74914 129.218 0.427573 126.781 0.427573C126.257 0.427573 125.58 0.554697 125.258 0.713429C124.939 0.870607 123.533 2.06188 122.133 3.36092C118.403 6.82194 118.159 6.83369 114.609 3.72209C111.301 0.822417 109.62 0.0541463 106.567 0.044992C103.354 0.0353195 101.749 0.707557 98.7215 3.33225C95.7924 5.87145 95.8947 5.79597 95.1614 5.95384C94.0031 6.2029 93.4243 5.89563 90.8433 3.66077C87.4777 0.746765 85.804 0.00474772 82.6603 0.0327288C79.5196 0.0605372 78.0336 0.732256 74.6696 3.64488C72.0737 5.89235 71.4947 6.20204 70.3484 5.95557C69.5756 5.78923 69.6555 5.84727 66.875 3.43744C63.7545 0.732947 62.1784 0.0498282 59.0251 0.0354922C55.983 0.0215016 54.2164 0.816026 50.9095 3.68582C48.3648 5.89425 47.778 6.20411 46.6146 5.95384C45.8812 5.79597 45.9836 5.87145 43.0544 3.33225C40.0268 0.707557 38.4223 0.0353195 35.2088 0.044992C32.1444 0.0541463 30.5108 0.804972 27.1109 3.767C23.5035 6.90986 23.4414 6.9052 19.153 3.16903C17.3138 1.56668 16.1735 0.861453 14.7431 0.441909C13.4061 0.0496556 11.4074 -0.111149 10.2629 0.0812639Z",

  bgCardProject:
    "bg-gradient-to-br from-rose-950 via-rose-800 to-rose-950 p-5 rounded-2xl sm:w-[360px] w-[360px] shadow-2xl",
  borderCardProject:
    "bg-gradient-to-br from-[#881337] via-transparent to-[#881337] p-[1px] rounded-2xl mr-8",
  warpProject:
    "bg-gradient-to-br from-[#400C1C] from-30% to-[#130006] rounded-none sm:rounded-3xl relative",

  bgServicesCard:
    "bg-gradient-to-br from-[#B3DDEB] to-[#E3F5FB] to-50% rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[45px] text-[27px] lg:leading-[98px] mt-5 xs:mt-2",
  heroSubText:
    "text-[#051C29] font-medium lg:text-[30px] sm:text-[26px] xs:text-[19px] text-[15px] lg:leading-[40px] mt-5",
  heroSlugSubText:
    "text-white-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[19px] text-[15px] lg:leading-[40px] mt-5",
  textName:
    "text-[#075985] lg:text-[70px] sm:text-[55px] xs:text-[40px] text-[25px] font-black mt-5 xs:mt-2",
  textSlug:
    "text-[#032234] lg:text-[80px] sm:text-[60px] xs:text-[45px] text-[29px] font-black lg:leading-[80px] xs:leading-[50px] sm:leading-[70px] leading-[40px]",
  navbarStyle:
    "w-full flex justify-between sm:justify-center items-center max-w-7xl sm:max-w-md mx-auto bg-transparent sm:backdrop-filter sm:backdrop-blur-2xl sm:shadow-lg hover:sm:shadow-[#000]/50 hover:sm:shadow-2xl text-slate-600/50  p-3 rounded-none sm:rounded-full sm:bg-white/10",
  buttonScroll:
    "w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2",

  changeLinkStyle:
    "w-full flex justify-between sm:justify-center items-center max-w-7xl sm:max-w-md mx-auto bg-transparent sm:backdrop-filter sm:backdrop-blur-2xl sm:shadow-2xl  p-3 rounded-none sm:rounded-full bg-[#0891b2] text-[#0891b2]",

  sectionHeadText:
    "font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText: "sm:text-[18px] text-[14px] uppercase tracking-wider",

  pathFirstEye:
    "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z",
  pathSecondEye:
    "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0",

  pathInstagram:
    "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
  pathEmail:
    "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
  elementRocket:
    "bottom-0 left-[65px] sm:left-[80px] absolute text-[35px] border-white dark:border-gray-800 rounded-full",
  warpElementContact:
    "flex flex-col sm:flex-row mt-20 items-start sm:items-center sm:space-x-12 space-y-5 sm:space-y-0",
  pathGithub:
    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8",
};

export { styles };