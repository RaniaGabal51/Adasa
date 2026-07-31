import avatar1 from "../../assets/photo-1507003211169-0a1dd7228f2d.jfif";
import avatar2 from "../../assets/photo-1500648767791-00dcc994a43e.jfif";
import avatar3 from "../../assets/photo-1472099645785-5658abf4ff4e.jfif";
export default function SubscribeSection() {
  return (
    <>
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-primary to-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-regular fa-envelope text-white text-3xl"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="highlight-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-subtext text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-background border border-[#262626] focus:outline-none focus:border-primary/50 text-white placeholder-subtext transition-colors"
                type="email"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-linear-to-r from-primary to-tertiary text-white font-semibold rounded-xl hover:from-tertiary hover:to-primary transition-all duration-300"
              >
                اشترك الآن
              </button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                    src={avatar1}
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-card"
                    src={avatar2}
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-card"
                    src={avatar3}
                  />
                </div>
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
            
              <span>بدون إزعاج</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
