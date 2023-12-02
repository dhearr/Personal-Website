/* eslint-disable react-refresh/only-export-components */
import GitHubCalendar from "react-github-calendar";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Calendar = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <motion.section
      variants={textVariant()}
      id="project"
      className="max-w-full px-6 lg:px-20 py-16"
    >
      <div>
        <h2
          className={`${styles.sectionHeadText} text-rose-50 flex items-center`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github w-[50px] h-[100px] inline-flex mr-4"
              viewBox="0 0 16 16"
            >
              <path d={styles.pathGithub} />
            </svg>
          </span>
          Contributions.
        </h2>
        <p className={`${styles.sectionSubText} text-rose-50`}>
          My contributions from last year on github
        </p>
        <p className="mt-2 text-[14px] text-rose-200 sm:text-[18px]">
          <a href="https://github.com/dhearr" target="blank">
            View on github
            <span className="ml-2 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-eye inline-flex"
                viewBox="0 0 16 16"
              >
                <path d={styles.pathFirstEye} />
                <path d={styles.pathSecondEye} />
              </svg>
            </span>
          </a>
        </p>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-2 mt-10 gap-5 max-w-xl">
        <div className={styles.borderHeadCalendar}>
          <div className={styles.bgHeadCalendar}>
            <h1 className={styles.textCalendar}>Total</h1>
            <p className={styles.subTextCalendar}>127</p>
          </div>
        </div>
        <div className={styles.borderHeadCalendar}>
          <div className={styles.bgHeadCalendar}>
            <h1 className={styles.textCalendar}>This Month</h1>
            <p className={styles.subTextCalendar}>0</p>
          </div>
        </div>
        <div className={styles.borderHeadCalendar}>
          <div className={styles.bgHeadCalendar}>
            <h1 className={styles.textCalendar}>This Week</h1>
            <p className={styles.subTextCalendar}>0</p>
          </div>
        </div>
      </div>

      <div className={styles.borderCalendar}>
        <div className={styles.wrapperCalendar}>
          <GitHubCalendar
            transformData={selectLastHalfYear}
            username="dhearr"
            showWeekdayLabels
            labels={{
              totalCount: "{{count}} Contributions in the last half year",
            }}
            blockSize={18}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Calendar;
