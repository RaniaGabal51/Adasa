export default function ArticleFilter({
  selectedCategory,
  onSelectCategory,
  search,
  onSearch,
}) {
  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  return (
    <div className="sticky top-20 z-40 bg-background/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="container py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full rounded-2xl bg-card text-white placeholder:text-neutral-500 border border-[#262626] px-3 py-3 outline-none transition-all duration-300 focus:border-primary pr-12"
            />

            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-lg"></i>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-primary to-tertiary text-white shadow-lg shadow-primary/20"
                      : "bg-card text-neutral-400 border border-[#262626] hover:border-primary/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
