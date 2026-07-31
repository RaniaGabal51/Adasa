import { Link } from "react-router-dom";
export default function CategorySection() {
  const categories = [
    {
      name: "إضاءة",
      icon: "fa-sun",
      number: "3",
    },
    {
      name: "بورتريه",
      icon: "fa-user",
      number: "3",
    },
    {
      name: "مناظر طبيعية",
      icon: "fa-mountain-sun",
      number: "2",
    },
    {
      name: "تقنيات",
      icon: "fa-sliders",
      number: "5",
    },
    {
      name: "معدات",
      icon: "fa-camera",
      number: "3",
    },
  ];
  return (
    <>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="hero-badge inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-neutral-300">
                التصنيفات
              </span>
            </div>

            <h2 className="font-bold text-[36px] md:text-[48px] lg:text-[60px] text-white">استكشف حسب الموضوع</h2>
            <p className="text-lg text-subtext max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                className="group relative block p-6 rounded-2xl bg-card border border-[#262626] overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                to={`/blog?category=${category.name}`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-primary/20 group-hover:border-transparent">
                    <i
                      className={`fa-solid ${category.icon} text-xl text-primary group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.number} مقالة
                  </p>
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <i className="fa-solid fa-arrow-left text-white text-sm"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
