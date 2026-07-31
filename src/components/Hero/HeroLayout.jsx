export default function HeroLayout({
  badge,
  title,
  highlight,
  secondTitle,
  description,
  children,
  sectionClass,
}) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-background py-5 ${sectionClass}`}
      >
        <div className="hero-grid" />
        <div className="hero-glow-left" />
        <div className="hero-glow-right" />
        <div className="relative container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-badge inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-neutral-300">
                {badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}{" "}
              {highlight ? (
                <span className="highlight-text">{highlight}</span>
              ) : ""}
              {secondTitle ? (
                <>
                  <br />
                  {secondTitle}
                </>
              ) : ""}
            </h1>
            <p className="text-xl text-subtext max-w-3xl mx-auto leading-relaxed mb-12">
              {description}
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
