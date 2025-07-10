export default function Loading() {
  return (
    <div className="w-full absolute z-100 h-screen flex flex-col justify-center items-center bg-[#ffffff]">
      <div className="w-full gap-x-2 flex justify-center items-center">
        <div className="w-3 bg-blue-400 animate-pulse h-3 rounded-full"></div>
        <div className="w-3 animate-pulse h-3 bg-blue-500 rounded-full"></div>
        <div className="w-3 h-3 animate-pulse bg-blue-600 rounded-full"></div>
        <div className="w-3 h-3 animate-pulse bg-blue-700 rounded-full"></div>
        <div className="w-3 h-3 animate-pulse bg-blue-800 rounded-full"></div>
      </div>
    </div>
  );
}
