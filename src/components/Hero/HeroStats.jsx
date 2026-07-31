export default function HeroStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {stats.map((item) => (
        <div
          key={item.id}
          className="rounded-[25px] bg-[#161514] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
        >
          <i className={`${item.icon} text-2xl text-primary mb-2 block`}></i>

          <div className="text-3xl font-bold highlight-text mb-1">
            {item.number}
          </div>

          <div className="text-sm text-subtext">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}