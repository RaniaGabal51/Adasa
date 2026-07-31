import { Link } from "react-router-dom";

export default function LegalLayout({
  children,
  icon,
  title,
  alertIcon,
  alertTitle,
  alertParagraph,
  linkPath,
  linkText,
}) {
  return (
    <>
      <div className="bg-background">
        <div className="relative py-30 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="hero-grid" />
          <div className="hero-glow-left" />
          <div className="hero-glow-right" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm mb-8">
              <Link
                className="text-subtext hover:text-white"
                to="/"
              >
                الرئيسية
              </Link>
              <i className="fa-solid fa-chevron-right text-xs text-neutral-600 rotate-180"></i>
              <span className="text-primary font-medium"> {alertTitle}</span>
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/30 mb-6">
              <i className={`fa-solid ${icon} text-2xl text-primary`}></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-subtext text-lg">آخر تحديث: 15 يناير 2026</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div>
                <i
                  className={`fa-solid ${alertIcon} text-xl text-secondary`}
                ></i>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-1">
                  {alertTitle}
                </h3>
                <p className="text-secondary/80 text-sm">{alertParagraph}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">{children}</div>

          <div className="mt-16 pt-8 border-t border-[#262626]">
            <p className="text-neutral-500 text-sm text-center">
              باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
              <Link
                className="text-primary hover:text-tertiary font-medium"
                to={linkPath}
              >
                {linkText}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
