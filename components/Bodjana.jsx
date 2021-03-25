import { useState } from "react";
import Link from "next/link";
import * as Icon from "./icons";
import { useRouter } from "next/router";

export default function Toko() {
  const router = useRouter();

  const menu = [
    "Blitar - Banyuwangi PP",
    "Blitar - Surabaya PP",
    "Blitar - Yogyakarta PP",
    "Blitar - Semarang PP",
    "Mobil Elf",
    "Minibus",
    "Paket Wisata Bali 2 pack 3 hari 2 malam",
    "Paket Wisata Korea 1 Minggu",
  ];

  const [countBodjana, setCount] = useState(0);
  const add = () => {
    setCount(countBodjana + 1);
  };
  const min = () => {
    setCount(countBodjana - 1);
    if (countBodjana == 0) {
      setCount(0);
    }
  };
  return (
    <div className="flex flex-col font-semibold w-full mb-20 relative bg-gray-50">
      <div className="py-2 w-full fixed bottom-0 ring-0 left-0 bg-white shadow-inner flex items-center justify-around text-gray-500">
        <Link href="/home">
          <a>
            <div className="flex flex-col items-center justify-center">
              <Icon.Home className="h-7 w-7 text-gray-700" />
              <div className="text-xs">Home</div>
            </div>
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Icon.Category className="h-7 w-7 text-gray-700" />
          <div className="text-xs">Category</div>
        </div>
        <Link href="/explore">
          <a>
            <div className="flex flex-col items-center justify-center">
              <Icon.Explore className="h-7 w-7 text-gray-700" />
              <div className="text-xs">Explore</div>
            </div>
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center relative">
          <Icon.Shopping className="h-7 w-7 text-gray-700" />
          <div className="text-xs">Orders</div>
          {countBodjana > 0 && (
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-sm absolute top-0 right-0">
              {countBodjana}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Icon.User className="h-7 w-7 text-gray-700" />
          <div className="text-xs">Me</div>
        </div>
      </div>
      <div className="flex items-center justify-between fixed top-0 left-0 right-0 space-x-4 px-4 py-4 pt-4 z-10">
        <div onClick={() => router.back()} className="">
          <Icon.ArrowBack className="h-7 w-7 text-gray-700" />
        </div>

        {/* <input
          type="text"
          className="flex-1 w-full border rounded focus:outline-none p-2 border-white"
        /> */}
        <div className="">
          <Icon.Menu className="h-7 w-7 text-gray-700" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-300 to-gray-50 h-72 w-full flex flex-col items-center justify-center relative">
        <div className="text-gray-700 text-3xl">Bodjana Tour & Travel</div>
        <div className="text-gray-700 text-sm">Togogan - Srengat - Blitar</div>
        <div className="flex space-x-1 text-gray-700 text-sm items-center mb-6">
          <Icon.Location className="w-4 h-4" />
          <div>5 Km</div>
        </div>
        <button className="stext-gray-700 font-semibold px-8 py-2 rounded-full border-gray-700 border absolute bottom-14 left-1/2 transform -translate-x-1/2">
          Follow
        </button>
      </div>
      <div className=""></div>
      <div className="mb-4 text-xl text-left px-4">Special Offers</div>
      <div className="flex items-center overflow-x-scroll w-full space-x-4 px-4">
        <div className="bg-blue-400 shadow-lg h-36 w-64 flex-shrink-0 rounded overflow-hidden">
          <img
            className="h-full w-full object-fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzVEAZp0Pvl-H9bq0DrAJ8P2I5lpVE7BSVQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="bg-blue-400 shadow-lg h-36 w-64 flex-shrink-0 rounded overflow-hidden">
          <img
            className="h-full w-full object-fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JreA9RNO2WhMl1gZ3o1xBwSrD6GJJmz1vw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="bg-blue-400 shadow-lg h-36 w-64 flex-shrink-0 rounded overflow-hidden">
          <img
            className="h-full w-full object-fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9xclD9u3F1e5GHAIbUW03km2cT8arxXtZQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="bg-blue-400 shadow-lg h-36 w-64 flex-shrink-0 rounded overflow-hidden">
          <img
            className="h-full w-full object-fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPGdYxuum5Y3v-8_6cYu4uVPHkAr4-MPYsg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="bg-blue-400 shadow-lg h-36 w-64 flex-shrink-0 rounded overflow-hidden">
          <img
            className="h-full w-full object-fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74YhawMXwsFS7udjitJ988qitwikueLmd_Q&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="h-12"></div>
      <div className="mb-4 text-xl text-left px-4">Rekomendasi</div>
      <div className="grid grid-cols-12 gap-4 w-full px-4">
        {menu.map((item) => (
          <div
            key={item}
            className="col-span-6 rounded w-full shadow-lg flex flex-col overflow-hidden"
          >
            <div className="bg-white space-y-3">
              <div className="h-36">
                <img
                  className="object-cover h-full w-full"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div>
                <div className="px-2 leading-tight pb-1 h-10 text-sm">
                  {item}
                </div>
                <div
                  className={`${
                    countBodjana === 0 &&
                    "mb-2 flex items-center justify-between px-2 text-yellow-600 pb-1"
                  }flex items-center justify-between px-2 text-yellow-600 pb-1`}
                >
                  <div className="text-sm">Rp 120.000</div>
                  {countBodjana == 0 && (
                    <span
                      onClick={add}
                      className="bg-green-300 rounded-lg h-6 w-6 flex justify-center items-center text-center  text-xl"
                    >
                      +
                    </span>
                  )}
                </div>
              </div>
            </div>
            {countBodjana > 0 && (
              <div className="justify-between flex items-center pb-2 pt-2 px-4">
                <span
                  onClick={min}
                  className="bg-green-300 rounded-lg h-6 w-6 flex justify-center items-center text-center  text-xl"
                >
                  -
                </span>
                <span className="text-lg">{countBodjana}</span>
                <span
                  onClick={add}
                  className="bg-green-300 rounded-lg h-6 w-6 flex justify-center items-center text-center  text-xl"
                >
                  +
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <button className="bg-indigo-500 rounded-full fixed bottom-10 right-4 h-16 w-16 font-bold text-6xl shadow-xl">
        +
      </button> */}
    </div>
  );
}
