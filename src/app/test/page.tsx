"use client";
import React from "react";

const Page = () => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };
  return (
    <div className=" grid w-full gap-2 md:grid-cols-2 ">
      <div
        className="bg-sky-100 flex
        flex-row justify-between items-center cursor-pointer 
            select-none  max-w-[400] w-full  rounded-[10px]
              border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="m-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          repellat praesentium et cupiditate distinctio, illum alias iste
        </div>
        <ul className="w-full  mr-4 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className=" text-center hover:bg-green-400 ">
            <div className="flex items-center ps-3">
              <input
                id="list-radio-military"
                type="radio"
                value="yes"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={radioHandler}
              />
              <label
                htmlFor="list-radio-military"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Тийм
              </label>
            </div>
          </li>
          <li className=" text-center hover:bg-green-400">
            <div className="flex items-center ps-3">
              <input
                id="list-radio-passport1"
                type="radio"
                value="no"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={radioHandler}
              />
              <label
                htmlFor="list-radio-passport1"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Үгүй
              </label>
            </div>
          </li>
        </ul>
      </div>{" "}
      {/* Display the selected drink */}
      {selectedAnswer && <h2 className="bg-black-900">{selectedAnswer}</h2>}
    </div>
  );
};

export default Page;
