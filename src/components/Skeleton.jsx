const Skeleton = () => {
  return (
    <>
      <div className="max-w-sm  mb-4 overflow-hidden">
        <div className="mb-2 animate-pulse bg-gray-300 h-2.5 w-8 rounded-full"></div>
        <div className="mb-5 animate-pulse bg-gray-300 h-3 w-40 rounded-full"></div>
        <div className="mb-2 animate-pulse bg-gray-300 h-4 max-w-sm rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-2.5 w-32 rounded-full"></div>
      </div>
    </>
  );
};

export default Skeleton;
