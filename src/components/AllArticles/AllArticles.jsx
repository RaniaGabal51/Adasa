import ArticleCard from "../ArticleCard/ArticleCard";

export default function AllArticles({
  posts,
  currentPage,
  setCurrentPage,
  onResetFilters,
}) {
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="container py-12 scroll-mt-[146px]">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-subtext">
          عرض <span className="font-bold text-white">{posts.length}</span>{" "}
          مقالات
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-card border border-[#262626] rounded-xl p-1">
            <button className="p-2 rounded-lg transition-all duration-300 bg-primary text-white">
              <i className="fa-solid fa-border-all text-lg"></i>
            </button>

            <button className="p-2 rounded-lg transition-all duration-300 text-subtext hover:text-white">
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-card border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-regular fa-face-frown text-neutral-500 text-5xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">لا توجد مقالات</h3>
          <p className="text-subtext mb-6">
            حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
          </p>
          <button
            onClick={onResetFilters}
            className="text-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-linear-to-r from-primary to-tertiary text-white inline-flex items-center gap-2"
          >
            <i className="fa-solid fa-rotate-right text-lg"></i>
            إعادة تعيين الفلاتر
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <>
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-background border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-card border-[#262626] text-white hover:border-primary/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === index + 1
                      ? "bg-linear-to-r from-primary to-tertiary text-white"
                      : "bg-card text-subtext border border-[#262626] hover:border-primary/50 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-background border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-card border-[#262626] text-white hover:border-primary/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>

          <p className="text-center text-neutral-500 mt-4 text-sm">
            صفحة {currentPage} من {totalPages}
          </p>
        </>
      )}
    </div>
  );
}
