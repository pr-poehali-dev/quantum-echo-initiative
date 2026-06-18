const works = [
  {
    src: 'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/3fd68daa-9201-48fd-978c-f3e4508ca837.jpg',
    title: 'Панорамные окна',
  },
  {
    src: 'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/a5b3fb36-e997-4606-9207-7deb5356aff4.jpg',
    title: 'Остекление балконов',
  },
  {
    src: 'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/af875313-d35c-4062-8878-b1cb5c209722.jpg',
    title: 'Входные двери',
  },
  {
    src: 'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/4f27514b-18d5-4c13-97ed-6ce8e7c4e707.jpg',
    title: 'Окна под ключ',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/50">
            Наши работы
          </p>
          <h2 className="text-3xl font-light text-white md:text-5xl">
            Витрина <span className="font-semibold">выполненных проектов</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {works.map((work) => (
            <div
              key={work.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={work.src}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-medium text-white md:text-2xl">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
