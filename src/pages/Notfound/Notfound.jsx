import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-background py-[80px]">
       <div className="hero-grid" />
        <div className="hero-glow-left" />
        <div className="hero-glow-right" />
        <div className="relative text-center px-4 max-w-lg mx-auto">
          <div className="relative mb-6">
            <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-primary via-yellow-500 to-primary leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[140px] md:text-[180px] font-black text-primary/20 blur-2xl leading-none select-none pointer-events-none">
              404
            </div>
          </div>
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-yellow-500/20 rounded-full border border-primary/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-regular fa-face-frown text-primary text-6xl"></i>
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-lg rotate-12 animate-bounce" />
            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              className="group cursor-pointer px-8 py-4 font-semibold text-white bg-linear-to-b from-primary to-tertiary rounded-[30px] flex justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              to="/"
            >
              <i className="fa-solid fa-house text-lg"></i>
              الذهاب للرئيسية
            </Link>
            <Link
              className="cursor-pointer px-8 py-4 font-semibold text-white border border-[#333] rounded-[30px] flex justify-center items-center gap-2 transition-all duration-300 hover:text-primary hover:bg-[#f973161a] hover:border-primary"
              to="/blog"
            >
              <i className="fa-solid fa-newspaper text-lg"></i>
              تصفح المقالات
            </Link>
          </div>
          <div>
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                className="text-primary hover:text-tertiary hover:underline font-medium"
                to="/blog"
              >
                المدونة
              </Link>

              <Link
                className="text-primary hover:text-tertiary hover:underline font-medium"
                to="/about"
              >
                من نحن
              </Link>

              <Link
                className="text-primary hover:text-tertiary hover:underline font-medium"
                to="/privacy"
              >
                الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
