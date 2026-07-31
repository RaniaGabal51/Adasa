import { Link } from "react-router-dom";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
      <Link
        to="/blog"
        className="group cursor-pointer px-8 py-4 font-semibold text-white bg-linear-to-b from-primary to-tertiary rounded-[30px] flex justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
      >
        <span>استكشف المقالات</span>

        <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-1"></i>
      </Link>

      <Link
        to="/about"
        className="cursor-pointer px-8 py-4 font-semibold text-white border border-[#333] rounded-[30px] flex justify-center items-center gap-2 transition-all duration-300 hover:text-primary hover:bg-[#f973161a] hover:border-primary"
      >
        <i className="fa-solid fa-circle-info"></i>

        <span>اعرف المزيد</span>
      </Link>
    </div>
  );
}
