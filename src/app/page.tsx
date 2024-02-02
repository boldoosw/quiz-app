import geoIcon from "../assets/images/geography.svg";
import histIcon from "../assets/images/history.svg";
import sciIcon from "../assets/images/science.svg";
import spaceIcon from "../assets/images/space.svg";
import Image from "next/image";
import climov from "@/assets/images/klimov.png";
import Link from "next/link";
import MyLineChart from "@/components/MyLineChart";
import VulnChart from "@/components/VulnChart/VulnChart";
import BarChart from "@/components/BarChart/BarChart";
import Cards from "@/components/Cards/Cards";

export default function Page() {
  return (
    <>
      <div className="text-black ">
        <div className="text-red-500  p-4 text-[24px] w-full">
          Мэргэжил сонгохын тулд хийх 4 алхам
        </div>
      </div>
      <div className="flex flex-col gap-5  md:flex-row md:justify-between">
        <Cards />
      </div>
    </>
  );
}
