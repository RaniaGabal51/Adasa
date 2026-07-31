export default function OurValues() {
  const OurValue = [
    {
      icon: "fa-bullseye",
      title: "الجودة أولاً",
      subtitle: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: "fa-bolt",
      title: "تركيز عملي",
      subtitle: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: "fa-handshake",
      title: "المجتمع",
      subtitle: "تعلم مع آلاف المصورين",
    },
    {
      icon: "fa-arrows-rotate",
      title: "دائماً محدث",
      subtitle: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];
  return (
    <>
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-linear-to-b from-primary to-secondary rounded-full" />
              قيمنا
              <span className="w-1.5 h-8 bg-linear-to-b from-secondary to-primary rounded-full" />
            </h2>
            <p className="text-lg text-subtext max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OurValue.map((values) => {
              return (
                <div className="group p-6 bg-card rounded-2xl border border-[#262626] hover:border-primary/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <i
                      className={`fa-solid ${values.icon} text-4xl text-primary mb-4 block`}
                    />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {values.title}
                    </h3>
                    <p className="text-subtext text-sm">
                      {values.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
