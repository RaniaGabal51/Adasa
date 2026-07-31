import { Link } from "react-router-dom";
import data from "../../data/posts.json";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function LatestArticles() {
  const latestThree = [...data.posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent" />
        <div className="relative container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="hero-badge inline-flex items-center gap-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-neutral-300">
                  الأحدث
                </span>
              </div>
              <h2 className="section-title text-white">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 text-tertiary font-semibold hover:text-primary transition-colors"
              to="/blog"
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestThree.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
