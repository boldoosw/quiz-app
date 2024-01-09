import geoIcon from "../assets/images/geography.svg";
import histIcon from "../assets/images/history.svg";
import sciIcon from "../assets/images/science.svg";
import spaceIcon from "../assets/images/space.svg";
import Image from "next/image";
import logonew from "@/assets/images/logo_mcu.png";

export default function Page() {
  return (
    <div className=" flex flex-column flex-wrap justify-between">
      {/* <Header>Choose a category to get started:</Header> */}

      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        How much do you expect to use each month?
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="radio"
            id="hosting-small"
            name="hosting"
            value="hosting-small"
            className="hidden peer"
            required
          />
          <label
            htmlFor="hosting-small"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="w-full">Good for small websites</div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="hosting-big"
            name="hosting"
            value="hosting-big"
            className="hidden peer"
            required
          />
          <label
            htmlFor="hosting-big"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="w-full">Good for large websites</div>
          </label>
        </li>
      </ul>
    </div>
  );
}
