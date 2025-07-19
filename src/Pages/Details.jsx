import Detail from "../components/Detail";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

const Details = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex w-full h-screen justify-center items-center bg-slate-950">
          <BarLoader color="#6366f1" loading={loading} size={100} />
        </div>
      ) : (
        <Detail />
      )}
    </>
  );
};

export default Details;
