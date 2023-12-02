import { useParams } from "react-router-dom";
import { blogs } from "../data";

const Detail = () => {
  const { blogId } = useParams();
  const blog = blogs.find((blog) => blog.id === blogId);
  const { data, date, title } = blog;

  return (
    <div>
      <h1>{title}</h1>
      <h1>{data}</h1>
      <h1>{date}</h1>
    </div>
  );
};

export default Detail;
