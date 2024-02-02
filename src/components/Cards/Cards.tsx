//Card.js file
import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/card_images/card1.png";
import card2 from "@/assets/images/card_images/card2.png";
import card3 from "@/assets/images/card_images/card3.png";
import card4 from "@/assets/images/card_images/card4.png";
function AboutCards() {
  // Card data
  const cardList = [
    {
      img: card1,
      title: "Түргэн тусламж",
      description: "1. Өөрийг тодорхойлох Түргэн тусламж",
    },
    {
      img: card2,
      title: "Хүсэл сонирхол",
      description: "2.Өөрийн “Хүсэл сонирхол”-д тохирох мэргэжил ",
    },
    {
      img: card4,
      title: "Тайлан дүгнэлт",
      description: "4.Тайлан дүгнэлт/Загвар тайлан/",
    },
    {
      img: card3,
      title: "Анализ шинжилгээ",
      description: "3.Мэргэжлийн нөлөөллийн анализ шинжилгээ  ",
    },
  ];
  return (
    <>
      {" "}
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
        >
          <Image
            src={card.img}
            alt="box_img"
            // width={250}
            // height={200}
            className="w-[75px] mb-4"
          />
          <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}
export default AboutCards;