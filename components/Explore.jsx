import { useState } from "react";
import Link from "next/link";
import * as Icon from "./icons";

export default function Home() {
  const menu = [
    ["Koffie Cling", "cling"],
    ["Bodjana Tour & Travel", "bodjana"],
    ["Bimario Travel", "explore"],
    ["Family Lundry", "explore"],
    ["Toko Kelontong Indonesia, Pasar Srengat", "explore"],
    ["Toko Kelontong Indonesia, RSUD Srengat", "explore"],
    ["Toko Kelontong Indonesia, Pukesmas Srengat", "explore"],
    ["Tandalan Coffe & Bar", "explore"],
    ["Cabarello Barber", "explore"],
    ["TJ Cell", "explore"],
    ["Amanah Swalayan", "explore"],
    ["Bakso Srengat Indah", "explore"],
    ["Angkringan Pak Dhe", "explore"],
    ["Pentol Kidul Pasar", "explore"],
    ["Voilo Photo", "explore"],
    ["Sempol Mantab", "explore"],
  ];

  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const min = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };
  return (
    <div className="flex flex-col font-semibold w-full mb-20 relative bg-gray-50">
      <div className="py-2 w-full fixed bottom-0 ring-0 left-0 bg-white shadow-inner flex items-center justify-around text-gray-500">
        <Link href="/home">
          <a>
            <div className="flex flex-col items-center justify-center">
              <Icon.Home className="h-8 w-8 text-gray-800" />
              <div className="text-xs">Home</div>
            </div>
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Icon.Category className="h-8 w-8 text-gray-800" />
          <div className="text-xs">Category</div>
        </div>
        <Link href="/exsplore">
          <a>
            <div className="flex flex-col items-center justify-center">
              <Icon.Explore className="h-8 w-8 text-gray-800" />
              <div className="text-xs">Explore</div>
            </div>
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Icon.Shopping className="h-8 w-8 text-gray-800" />
          <div className="text-xs">Orders</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Icon.User className="h-8 w-8 text-gray-800" />
          <div className="text-xs">Me</div>
        </div>
      </div>
      <div className="flex items-center justify-between absolute top-0 left-0 right-0 space-x-4 px-4 pt-4 z-10">
        <div className="">
          <Icon.Location className="h-8 w-8 text-gray-800" />
        </div>
        <input
          type="text"
          className="flex-1 w-full border rounded focus:outline-none p-2 border-gray-700 bg-white"
        />
        <div className="">
          <Icon.Camera className="h-8 w-8 text-gray-800" />
        </div>
      </div>
      <div className="h-24"></div>
      {menu.map((item) => (
        <Link key={item} href={`/${item[1]}`}>
          <a>
            <section className="px-4 mb-4 rounded overflow-hidden shadow-lg">
              <div className="flex flex-col w-full bg-white">
                <div className="flex w-full">
                  <div className="w-1/3 bg-green-300"></div>
                  <div className="flex flex-col w-full px-2 py-2">
                    <div className="flex justify-between w-full items-start">
                      <div className="text-gray-800 w-4/5">{item[0]}</div>
                      <div className="flex space-x-1 items-center">
                        <Icon.Location className="text-gray-800 h-3 w-3" />
                        <div className="text-xs text-gray-800">1 Km</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">Srengat, Blitar</div>

                    <div className="text-sm text-gray-700 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet, enim.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </a>
        </Link>
      ))}
    </div>
  );
}
