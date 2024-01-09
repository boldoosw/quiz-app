import logonew from "@/assets/images/logo_mcu.png";
import Image from "next/image";
function SubjectCard() {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-2xl dark:hover:shadow-dark"
      // onClick={() => props.onClick(props.subject.toLowerCase())}
    >
      <div className="flex justify-center pt-12">
        {/* <img src={props.imgSrc} alt={props.imgAlt} width="180" height="180" /> */}
        {/* <img src={logonew} alt=" logo" width="180" height="180" /> */}
        <Image className="w-16" src={logonew} alt=" logo" />
      </div>
      <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8 pl-8">
        {/* {props.subject} */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
      </h2>
    </div>
  );
}

export default SubjectCard;
