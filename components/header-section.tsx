import Image from "next/image";

const HeaderSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header className="h-60 relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="header image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex flex-col relative justify-center items-center h-60 text-center pt-14">
        <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
        <p className="text-gray-300 text-xl">{subTitle}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
