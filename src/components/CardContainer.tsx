import Image from "next/image";
import React from "react";

interface CardData {
  id: number;
  icon: string;
  title: string;
  value: string | number;
}

const cardData: CardData[] = [
  {
    id: 1,
    icon: "/images/Paper.svg",
    title: "Total Menu",
    value: 345,
  },
  {
    id: 2,
    icon: "/images/Activity.svg",
    title: "Total Revenue",
    value: "$37,193.00",
  },
  {
    id: 3,
    icon: "/images/Users.svg",
    title: "Total Customers",
    value: 1349,
  },
  {
    id: 4,
    icon: "/images/Bag.svg",
    title: "Total Orders",
    value: "3,500",
  },
];

const CardContainer: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-5 md:gap-x-5 my-5 w-full">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="shadow-md p-5 rounded-md flex flex-col gap-y-5 bg-white"
          style={{ borderRadius: 5 }}
        >
          <Image src={card.icon} alt={card.title} width={24} height={24} />

          <div className="mt-5 flex flex-col gap-y-3">
            <span className="text-sm font-normal text-chucky-gray-100 font-[inter]">
              {card.title}
            </span>
            <h1 className="font-semibold font-[inter] text-3xl text-[#1E293B]">
              {card.value}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardContainer;
