import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { icon: "fa-brands fa-x-twitter"},
    { icon: "fa-brands fa-github"},
    { icon: "fa-brands fa-linkedin-in"},
    { icon: "fa-brands fa-youtube"},
  ];

  const exploreLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/blog", label: "المدونة" },
    { path: "/about", label: "من نحن" },
  ];

  const categoryLinks = [
    { path: "/blog?category=إضاءة", label: "إضاءة" },
    { path: "/blog?category=بورتريه", label: "بورتريه" },
    { path: "/blog?category=مناظر طبيعية", label: "مناظر طبيعية" },
    { path: "/blog?category=تقنيات", label: "تقنيات" },
  ];


  
  return (
    <>
      <footer className="relative bg-[#0E0D0A] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="hero-glow-left" />
        <div className="hero-glow-right" />
        <div className="relative container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link className="flex items-center gap-3 mb-6 group" to="/">
                <div className="w-11 h-11 bg-linear-to-br from-primary to-tertiary rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl">ع</span>
                </div>
                <span className="text-xl font-bold text-white">عدسة</span>
              </Link>

              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-card border border-[#262626] hover:bg-linear-to-br hover:from-primary hover:to-tertiary hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
                استكشف
              </h3>
              <ul className="space-y-4">
                {exploreLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                      to={link.path}
                    >
                      <i className="fa-solid fa-chevron-right text-sm opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-primary rotate-180"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
                التصنيفات
              </h3>
              <ul className="space-y-4">
                {categoryLinks.map((category) => (
                  <li key={category.path}>
                    <Link
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                      to={category.path}
                    >
                      <i className="fa-solid fa-chevron-right text-sm opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-primary rotate-180"></i>
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-3 bg-card border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-neutral-600"
                    type="email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-sm cursor-pointer px-8 py-4 font-semibold text-white bg-linear-to-b from-primary to-tertiary rounded-[30px] flex justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 "
                >
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative border-t border-[#262626]">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل{" "}
                <i className="fa-solid fa-heart text-primary" /> جميع الحقوق
                محفوظة.
              </p>
              <div className="flex gap-6">
                <Link
                  className="text-sm text-neutral-600 hover:text-primary transition-colors duration-300"
                  to="/privacy"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  className="text-sm text-neutral-600 hover:text-primary transition-colors duration-300"
                  to="/terms"
                >
                  شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
