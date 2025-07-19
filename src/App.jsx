import { Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Works } from "./components";
import Blogs from "./Pages/Blogs";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import Credits from "./Pages/Credits";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Experience />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/project" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/blogs/:id" element={<Details />} />
    </Routes>
  );
}
