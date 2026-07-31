import HeroLayout from "../../components/Hero/HeroLayout";
import HeroButtons from "../../components/Hero/HeroButtons";
import HeroStats from "../../components/Hero/HeroStats";
import FeaturedArticles from "../../components/FeaturedArticles/FeaturedArticles";
import CategorySection from "../../components/CategorySection/CategorySection";
import LatestArticles from "../../components/LatestArticles/LatestArticles";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";

export default function Home() {
  const homeStats = [
    {
      id: 1,
      icon: "fa-solid fa-newspaper",
      number: "+50",
      title: "مقالة",
    },
    {
      id: 2,
      icon: "fa-solid fa-users",
      number: "+10 ألف",
      title: "قارئ",
    },
    {
      id: 3,
      icon: "fa-solid fa-folder-open",
      number: "4",
      title: "تصنيفات",
    },
    {
      id: 4,
      icon: "fa-solid fa-pen-nib",
      number: "6",
      title: "كاتب",
    },
  ];

  return (
    <>
      <HeroLayout
        badge="مرحباً بك في عدسة"
        title="اكتشف"
        highlight="فن"
        secondTitle="التصوير الفوتوغرافي"
        description="انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير."
        sectionClass="min-h-[90vh] flex items-center"
      >
        <HeroButtons />

        <HeroStats stats={homeStats} />
      </HeroLayout>
      <FeaturedArticles/>
      <CategorySection/>
      <LatestArticles/>
      <SubscribeSection/>
    </>
  );
}
