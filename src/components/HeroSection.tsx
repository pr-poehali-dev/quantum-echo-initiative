import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/4f27514b-18d5-4c13-97ed-6ce8e7c4e707.jpg',
  'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/af875313-d35c-4062-8878-b1cb5c209722.jpg',
  'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/a5b3fb36-e997-4606-9207-7deb5356aff4.jpg',
  'https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/3fd68daa-9201-48fd-978c-f3e4508ca837.jpg',
];

const PHONE = '+7 (900) 000-00-00';
const PHONE_HREF = 'tel:+79000000000';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-8">
            <div
              className={cn(
                'flex items-center gap-4 transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl md:h-20 md:w-20">
                <img
                  src="https://cdn.poehali.dev/projects/bd48f369-b1ef-4afb-bbec-8c2bb8b86fef/files/1ec1f3ec-d903-4cd7-9885-6c099f3102a8.jpg"
                  alt="Логотип салона окон и дверей"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold uppercase tracking-widest text-white/90 md:text-xl">
                Окна · Двери · Балконы
              </span>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-6">
                <h1 className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
                  Пластиковые окна и двери <br />
                  <span className="font-semibold">под ключ в Пыть-Яхе</span>
                </h1>
                <p className="max-w-xl text-lg font-light text-white/80 md:text-xl">
                  Установка, остекление балконов, ремонт и обслуживание. Качество,
                  которое прослужит годами.
                </p>

                <div className="flex items-center gap-3 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 backdrop-blur-sm">
                  <span className="text-2xl">✅</span>
                  <span className="text-base font-medium text-white md:text-lg">
                    Выезд и замер — бесплатно
                  </span>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:bg-white/90"
                  >
                    <span className="text-xl">📞</span>
                    {PHONE}
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10"
                  >
                    Наши услуги
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
