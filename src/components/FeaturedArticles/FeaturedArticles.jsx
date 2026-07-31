import { Link } from "react-router-dom";
import data from "../../data/posts.json";

export default function FeaturedArticles() {
  const featuredPosts = data.posts.filter((post) => post.featured);
  return (
    <>
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent" />
        <div className="relative container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="hero-badge inline-flex items-center gap-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-neutral-300">
                  مميز
                </span>
              </div>
              <h2 className="font-bold text-[36px] md:text-[48px] lg:text-[60px] text-white">
                مقالات مختارة
              </h2>
              <p className="text-lg text-subtext max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-tertiary text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="/blog"
            >
              عرض الكل
             <i className="fa-solid fa-chevron-left text-base group-hover:-translate-x-1 transition-transform"></i>
            </Link>
          </div>
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative bg-card rounded-3xl overflow-hidden border border-[#262626] hover:border-primary/30 transition-all duration-500"
              >
                <Link className="block" to={`/blog/${post.slug}`}>
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-[400px] overflow-hidden">
                      <img
                       alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full">
                          <i className="fa-solid fa-star text-sm"></i>
                          مميز
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-card">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock text-base"></i>
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-subtext mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                              src={post.author.avatar}
                            />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary rounded-full border-2 border-card" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-subtext">{post.date}</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          اقرأ المقال
                          <i className="fa-solid fa-arrow-left text-xl"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
