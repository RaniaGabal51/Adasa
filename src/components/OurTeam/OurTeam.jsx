import data from "../../data/posts.json";

export default function OurTeam() {
  const authors = data.posts;
  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full text-primary bg-primary/10 border border-primary/30">
              <span className="inline-flex rounded-full h-2 w-2 bg-primary" />

              <span className="text-sm font-medium text-neutral-300">
                فريقنا
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-subtext max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((data) => {
              return (
                <div className="group bg-card rounded-2xl p-6 text-center border border-[#262626] hover:border-primary/30 transition-all duration-300">
                  <div className="relative inline-block mb-4">
                    <img
                      alt={data.author.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-primary/30 transition-all"
                      src={data.author.avatar}
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-lg">{data.author.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">
                    {data.author.role}
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-x-twitter text-base"></i>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-github text-base"></i>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-linkedin text-base"></i>
                    </a>
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
