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
    <div className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
      <Cards />
    </div>
  );
}
