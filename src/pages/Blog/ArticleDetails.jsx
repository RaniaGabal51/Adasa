import data from "../../data/posts.json";
import { useParams, Link } from "react-router-dom";

export default function ArticleDetails() {
  const { slug } = useParams();

  const post = data.posts.find((item) => item.slug === slug);

  const relatedPosts = data.posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <article className="bg-background min-h-screen" key={post.id}>
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden mt-[80px]">
          <img
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            src={post.image}
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-background/30 to-transparent" />
          <div className="absolute top-8 right-8 left-8">
            <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/"
              >
                <i className="fa-solid fa-home" />
              </Link>
              <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/blog"
              >
                المدونة
              </Link>
              <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
              <span className="text-secondary font-medium max-w-[200px]">
                {post.category}
              </span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-tertiary transition-colors"
                  to={`/blog?category=${post.category}`}
                >
                  {post.category}
                </Link>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-clock" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/50"
                  src={post.author.avatar}
                />
                <div>
                  <p className="font-bold text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-linear-to-r from-primary/10 to-secondary/5 rounded-2xl border border-primary/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>

              <div className="prose-custom">
                {post.content.map((section, index) => (
                  <div key={index}>
                    {section.title && (
                      <h2
                        id={`section-${index}`}
                        className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                      >
                        <span className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl border border-primary/30">
                          <i className="fa-solid fa-camera text-primary" />
                        </span>

                        {section.title}
                      </h2>
                    )}

                    <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                    <i className="fa-solid fa-tags text-primary" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span className="px-4 py-2 bg-[#1a1a1a] text-subtext text-sm rounded-full border border-[#262626] hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                      <i className="fa-solid fa-share-nodes text-primary" />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-subtext hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-x-twitter" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-subtext hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-linkedin-in" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-subtext hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-whatsapp" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-subtext hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-solid fa-link" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-8 bg-linear-to-br from-card to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    alt={post.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-primary/20"
                    src={post.author.avatar}
                  />
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {post.author.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-subtext text-sm leading-relaxed">
                      {post.author.role} شغوف بمشاركة المعرفة والخبرات في عالم
                      التصوير الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                      <i className="fa-solid fa-list text-primary" />
                    </div>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    {post.content
                      .filter((section) => section.title)
                      .map((section, index) => (
                        <Link
                          key={index}
                          to={`#section-${index + 1}`}
                          className="flex items-center gap-3 p-3 rounded-xl text-subtext hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            {index + 1}
                          </span>

                          <span className="text-sm">{section.title}</span>
                        </Link>
                      ))}
                  </nav>
                </div>
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-xl">
                      <i className="fa-regular fa-clock text-primary text-xl mb-2" />
                      <p className="text-white font-bold">{post.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl">
                      <i className="fa-regular fa-calendar text-primary text-xl mb-2" />
                      <p className="text-white font-bold text-sm">
                        {post.date}
                      </p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-linear-to-br from-primary/10 to-secondary/5 rounded-2xl border border-primary/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-envelope text-primary text-xl" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-subtext text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <Link
                      className="block w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-tertiary transition-colors text-center"
                      to="/blog"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/30">
                  <i className="fa-solid fa-images text-primary text-xl" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                className="hidden sm:flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
                to="/blog"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-primary/30 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />

                    <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        {item.author.name}
                      </span>

                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
