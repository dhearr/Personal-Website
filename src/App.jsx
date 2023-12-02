import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styles } from "./styles";
import {
  vector,
  bgexperience,
  bgtech,
  experiences,
} from "../public/static/images";

import {
  About,
  Contact,
  Experience,
  Titleexperience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Calendar from "./components/Calendar";
import Blogs from "./Pages/Blogs";
import Details from "./Pages/Details";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0">
              <div className={`${styles.bgHero}`}>
                <img
                  src={vector}
                  alt="vector"
                  className="absolute object-contain"
                />
                <Navbar />
                <Hero />
                <About />
              </div>
              <section id="work" className={`${styles.bgExperience}`}>
                <img
                  src={experiences}
                  alt=""
                  className="absolute right-0 top-0"
                />
                <Titleexperience />
                <div className={`${styles.borderExperience}`}>
                  <div className={`${styles.warpExperience}`}>
                    <img
                      src={bgexperience}
                      alt="wokr-tech"
                      className="absolute hidden sm:block bottom-0 object-contain"
                    />
                    <Experience />
                  </div>
                </div>
              </section>
              <section id="project" className={`${styles.bgProject}`}>
                <div className={`${styles.borderProject}`}>
                  <div className={`${styles.warpProject}`}>
                    <img
                      src={bgtech}
                      alt="wokr-tech"
                      className="absolute right-0 bottom-0 object-contain"
                    />
                    <Works />
                    <Calendar />
                    <Tech />
                  </div>
                </div>
              </section>
              <div className="relative bg-[#040D11] z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs/:blogId" element={<Details />} />
      </Routes>
    </Router>
  );
}
