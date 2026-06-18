import Icon from '@/components/ui/icon';

const PHONE = '+7 (900) 000-00-00';
const PHONE_HREF = 'tel:+79000000000';

export default function Contacts() {
  return (
    <section id="contacts" className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/50">
              Свяжитесь с нами
            </p>
            <h2 className="mb-8 text-3xl font-light text-white md:text-5xl">
              Бесплатная <span className="font-semibold">консультация</span>
            </h2>

            <div className="space-y-6">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 text-white transition-colors hover:text-white/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon name="Phone" size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/50">Телефон</p>
                  <p className="text-xl font-medium">{PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon name="MapPin" size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/50">Адрес</p>
                  <p className="text-lg font-medium leading-snug">
                    г. Пыть-Ях, 5 микрорайон,<br />
                    рынок «Пятёрочка», строение 63, корпус 7
                  </p>
                  <p className="text-sm text-white/50">ХМАО, Нефтеюганский район</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-4">
                <span className="text-2xl">✅</span>
                <span className="text-base font-medium text-white">
                  Выезд специалиста и замер — абсолютно бесплатно
                </span>
              </div>
            </div>

            <a
              href={PHONE_HREF}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:bg-white/90"
            >
              <span className="text-xl">📞</span>
              Позвонить и заказать замер
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?text=Пыть-Ях, 5 микрорайон&z=14"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 border-t border-white/10 px-8 pt-8 md:px-16">
        <p className="text-center text-sm text-white/40">
          © {new Date().getFullYear()} Салон пластиковых окон и дверей · г. Пыть-Ях
        </p>
      </div>
    </section>
  );
}
