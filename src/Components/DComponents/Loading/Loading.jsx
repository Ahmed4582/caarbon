const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b68d33]"></div>
      <p className="text-[14px] text-[#b68d33]">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
