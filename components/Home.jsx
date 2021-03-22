import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const menu = [
    "Nasi Goreng Super Mantab",
    "Es Teh",
    "Es Jeruk",
    "Kopi Aceh",
    "Susu Segar",
    "Gellato Istimewa",
    "Mie Ayam Parikesit",
    "Ayam Bakar Koteka",
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
      <div className="h-14 w-full fixed bottom-0 ring-0 left-0 bg-white shadow-inner flex items-center justify-around text-gray-500">
        <div>Home</div>
        <div>Kate</div>
        <Link href="/toko">
          <a>
            <div>Expl</div>
          </a>
        </Link>
        <div>Order</div>
        <div>Me</div>
      </div>
      <div className="flex items-center justify-between absolute top-0 left-0 right-0 space-x-4 px-4 pt-4 z-10">
        <div className="">icon</div>
        <input
          type="text"
          className="flex-1 w-full border rounded focus:outline-none p-2 border-white"
        />
        <div className="">icon</div>
      </div>
      <div className="bg-gradient-to-b from-green-300 to-gray-50 h-80 w-full space-y-2 flex flex-col items-center justify-center relative">
        <div className="flex text-6xl">
          <div className="text-gray-700">LURU</div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
        </div>
        <div className="font-mono tracking-tight">
          Apa yang kamu cari?, Ada disekitarmu!
        </div>
        {/* <button className="text-gray-700 font-semibold px-8 py-2 rounded-full border-gray-700 border absolute bottom-14 left-1/2 transform -translate-x-1/2">
          Follow
        </button> */}
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
            key="item"
            className="col-span-6 rounded w-full shadow-lg flex flex-col overflow-hidden"
          >
            <div className="bg-white space-y-3">
              <div className="h-36">
                <img
                  className="object-cover h-full w-full"
                  src="image.png"
                  alt=""
                />
              </div>
              <div>
                <div className="px-2 leading-tight pb-1 h-10 text-sm">
                  {item}
                </div>
                <div
                  className={`${
                    count === 0 &&
                    "mb-2 flex items-center justify-between px-2 text-yellow-600 pb-1"
                  }flex items-center justify-between px-2 text-yellow-600 pb-1`}
                >
                  <div className="text-sm">Rp 10.000</div>
                  {count == 0 && (
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
            {count > 0 && (
              <div className="justify-between flex items-center pb-2 pt-2 px-4">
                <span
                  onClick={min}
                  className="bg-green-300 rounded-lg h-6 w-6 flex justify-center items-center text-center  text-xl"
                >
                  -
                </span>
                <span className="text-lg">{count}</span>
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
