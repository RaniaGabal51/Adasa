import { useState } from "react";
import data from "../../data/posts.json";
import HeroLayout from "../../components/Hero/HeroLayout";
import ArticleFilter from "../../components/ArticleFilter/ArticleFilter";
import AllArticles from "../../components/AllArticles/AllArticles";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = data.posts.filter((post) => {
    const categoryMatch =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const resetFilters = () => {
    setSelectedCategory("جميع المقالات");
    setSearch("");
    setCurrentPage(1);
  };

  return (
    <>
      <HeroLayout
        badge="مدونتنا"
        title="استكشف"
        highlight="مقالاتنا"
        description="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
        sectionClass="py-20"
      />

      <ArticleFilter
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
        search={search}
        onSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />

      <AllArticles
        posts={filteredPosts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onResetFilters={resetFilters}
      />
    </>
  );
}
