import Blog from "../components/Blog";
import { useState, useEffect } from "react";
import Skeletons from "../components/Skeletons";

const Blogs = () => {
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setSkeleton(true);
    setTimeout(() => {
      setSkeleton(false);
    }, 1000);
  }, []);

  return <>{skeleton ? <Skeletons /> : <Blog />}</>;
};

export default Blogs;
