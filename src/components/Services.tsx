import Icon from '@/components/ui/icon';

const services = [
  { icon: 'Settings', title: 'Регулировка окон и дверей', desc: 'Настройка и сезонное обслуживание для плавного хода.' },
  { icon: 'Wrench', title: 'Ремонт фурнитуры', desc: 'Восстановим работу ручек, петель и запорных механизмов.' },
  { icon: 'Replace', title: 'Замена фурнитуры', desc: 'Установим новую надёжную фурнитуру взамен изношенной.' },
  { icon: 'Layers', title: 'Замена уплотнителей', desc: 'Заменим резиновые уплотнители — уйдут сквозняки и холод.' },
  { icon: 'GalleryVerticalEnd', title: 'Замена стеклопакета', desc: 'Поменяем повреждённый или запотевший стеклопакет.' },
  { icon: 'SprayCan', title: 'Перепенивание окна', desc: 'Устраним продувание и улучшим теплоизоляцию.' },
  { icon: 'CloudRain', title: 'Установка отливов', desc: 'Защитим окно снаружи от дождя и влаги.' },
  { icon: 'PanelTop', title: 'Установка откосов', desc: 'Аккуратные откосы для завершённого вида окна.' },
  { icon: 'AlignHorizontalDistributeCenter', title: 'Установка подоконников', desc: 'Подберём и установим подоконник любого размера.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/50">
            Что мы делаем
          </p>
          <h2 className="text-3xl font-light text-white md:text-5xl">
            Наши <span className="font-semibold">услуги</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-white/30 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <Icon name={service.icon} size={26} />
              </div>
              <h3 className="mb-2 text-xl font-medium text-white">{service.title}</h3>
              <p className="text-base font-light leading-relaxed text-white/60">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
