import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    icon: "Search",
    title: "Найди попутчика",
    description: "Зайди в чат «По пути Гусиноозёрск» и напиши куда и когда едешь — или найди подходящее объявление.",
  },
  {
    number: "02",
    icon: "MessageCircle",
    title: "Договорись",
    description: "Напиши водителю или пассажиру напрямую. Обсудите время, место встречи и стоимость поездки.",
  },
  {
    number: "03",
    icon: "Car",
    title: "Поехали!",
    description: "Встречайтесь и отправляйтесь в путь. Никаких приложений, никакой комиссии — только живое общение.",
  },
];

export default function HowItWorks() {
  return (
    <div id="about" className="bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Просто и быстро</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Как это работает
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-neutral-100">{step.number}</span>
                <div className="w-10 h-10 flex items-center justify-center bg-neutral-900 rounded-full">
                  <Icon name={step.icon as "Search"} size={18} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a
            href="https://max.ru/join/YifwYXwpscgR9FnKXgcUcLWJ7F6GgT3yq-ybNnn7ZMY"
            className="bg-black text-white border border-black px-8 py-3 text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black inline-block"
          >
            Вступить в чат
          </a>
        </div>
      </div>
    </div>
  );
}
