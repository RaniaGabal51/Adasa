import HeroLayout from "../../components/Hero/HeroLayout";
import HeroStats from "../../components/Hero/HeroStats";
import OurTeam from "../../components/OurTeam/OurTeam";
import OurValues from "../../components/OurValues/OurValues";
export default function About() {
  const aboutStats = [
    {
      id: 1,
      icon: "fa-solid fa-users",
      number: "+2 مليون",
      title: "قارئ شهرياً",
    },
    {
      id: 2,
      icon: "fa-solid fa-newspaper",
      number: "+500",
      title: "مقالة منشورة",
    },
    {
      id: 3,
      icon: "fa-solid fa-pen-nib",
      number: "+50",
      title: "كاتب خبير",
    },
    {
      id: 4,
      icon: "fa-solid fa-book-open",
      number: "+15",
      title: "تصنيف",
    },
  ];

  return (
    <>
      <HeroLayout
        badge="من نحن"
        title="مهمتنا هي"
        highlight="الإعلام والإلهام"
        description="مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة."
        sectionClass="py-24"
      >
        <HeroStats stats={aboutStats} />
      </HeroLayout>
      <OurValues/>
      <OurTeam/>
    </>
  );
}
