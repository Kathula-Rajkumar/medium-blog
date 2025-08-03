import { Link } from "react-router-dom";

export const Body = () => {
  return (
    <div className="h-screen bg-[#f9f7f3] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 overflow-hidden">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6 mt-12 md:mt-0">
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight">
          Human <br /> stories & ideas
        </h1>
        <p className="text-lg text-gray-700">
          A place to read, write, and deepen your understanding
        </p>
        <Link to="/signin">
          <button className="h-10 px-6 font-semibold border rounded-full bg-black text-white text-sm">
            Start Reading
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-end items-center mb-6"> {/* <-- added mb-6 */}
  <img
    src="/bg.png"
    alt="Hero Image"
    className="w-[320px] md:w-[480px] object-contain"
  />
</div>
    </div>
  );
};
