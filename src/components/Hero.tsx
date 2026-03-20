import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/0f7095f9-fbec-44b8-ad1a-e2a4ef2b570f/files/138cf9cb-09ef-4d6b-b0eb-2375b1ad7bc1.jpg"
          alt="Гусиноозёрск, озеро Гусиное"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ПО ПУТИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Чат попутчиков Гусиноозёрска — едем вместе, платим меньше
        </p>
        <a
          href="https://max.ru/join/YifwYXwpscgR9FnKXgcUcLWJ7F6GgT3yq-ybNnn7ZMY"
          className="inline-block mt-8 px-8 py-3 border border-white text-white uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
        >
          Как вступить
        </a>
      </div>
    </div>
  );
}