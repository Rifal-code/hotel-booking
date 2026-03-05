import { IoPeopleOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-72 w-auto rounded-t-sm relative">
        <Image
          src="/hero.jpg"
          width={384}
          height={256}
          alt="room image"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>
      <div className="p-8">
        <h4 className="font-medium text-2xl">
          <Link
            href="#"
            className="hover:text-gray-800 transition duration-150"
          >
            Luxury Room
          </Link>
        </h4>
        <h4 className="text-2xl mb-7">
          <span className="text-gray-600 font-semibold">Rp 2100000</span>
          <span className="text-gray-400 text-sm">/Night</span>
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPeopleOutline />
            <span>2 People</span>
          </div>
          <Link
            href="#"
            className="bg-orange-400 text-white hover:bg-orange-500 py-2.5 px-6 md:px-10 md:py-3 text-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-150 rounded-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
