import Image from "next/image";
import { Quicksand } from "next/font/google";
// Logo
import Logo from "@/assets/react-quiz-logo.svg";
import "../globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "React Quiz 2023",
  description: "Become the quiz master!",
};

export default function QuizLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    >
      {/* <main
      className={`${quicksand.variable} bg-gray-200 rounded-xl mb-4 p-16 font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    > */}
      <Image className="h-[80px] sm:h-full" src={Logo} alt="logo" />
      {children}
    </main>
  );
}
