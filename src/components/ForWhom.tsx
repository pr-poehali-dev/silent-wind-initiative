import Icon from "@/components/ui/icon";

const cards = [
  {
    id: "drivers",
    icon: "Steering",
    emoji: "🚗",
    tag: "Водителям",
    title: "Едешь в ту сторону? Возьми попутчика",
    perks: [
      "Покрой расходы на бензин",
      "Найди пассажира за минуты",
      "Никакой комиссии — деньги сразу тебе",
    ],
    bg: "bg-neutral-900",
    text: "text-white",
    tagColor: "text-neutral-400",
    perkColor: "text-neutral-300",
    btnClass: "border-white text-white hover:bg-white hover:text-black",
  },
  {
    id: "passengers",
    icon: "MapPin",
    emoji: "🧳",
    tag: "Пассажирам",
    title: "Нужно доехать? Найди попутчика рядом",
    perks: [
      "Дешевле такси в разы",
      "Живые люди, не алгоритмы",
      "Удобное время и место встречи",
    ],
    bg: "bg-neutral-100",
    text: "text-neutral-900",
    tagColor: "text-neutral-500",
    perkColor: "text-neutral-600",
    btnClass: "border-black text-black hover:bg-black hover:text-white",
  },
];

export default function ForWhom() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.id}
          id={card.id}
          className={`${card.bg} ${card.text} px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-between min-h-[500px]`}
        >
          <div>
            <p className={`uppercase text-sm tracking-wide mb-6 ${card.tagColor}`}>{card.tag}</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-10">{card.title}</h2>
            <ul className="flex flex-col gap-4 mb-12">
              {card.perks.map((perk) => (
                <li key={perk} className={`flex items-center gap-3 ${card.perkColor}`}>
                  <Icon name="Check" size={16} className="shrink-0" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://max.ru/join/YifwYXwpscgR9FnKXgcUcLWJ7F6GgT3yq-ybNnn7ZMY"
            className={`border px-8 py-3 text-sm uppercase tracking-wide transition-all duration-300 inline-block w-fit ${card.btnClass}`}
          >
            Вступить в чат
          </a>
        </div>
      ))}
    </div>
  );
}
