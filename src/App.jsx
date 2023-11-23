import { BrowserRouter } from "react-router-dom";
import { styles } from "./styles";

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

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className={`${styles.bgHero}`}>
          <img
            src="/src/assets/vector.png"
            alt="vector"
            className="absolute object-contain"
          />
          <Navbar />
          <Hero />
          <About />
        </div>
        <section id="work" className={`${styles.bgExperience}`}>
          <img
            src="/src/assets/experiences.png"
            alt=""
            className="absolute right-0 top-0"
          />
          <Titleexperience />
          <div className={`${styles.borderExperience}`}>
            <div className={`${styles.warpExperience}`}>
              <img
                src="/src/assets/bgexperience.png"
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
                src="/src/assets/bgtech.png"
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
    </BrowserRouter>
  );
}
