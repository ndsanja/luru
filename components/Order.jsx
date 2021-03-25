import { useState } from "react";
import Link from "next/link";
import * as Icon from "./icons";
import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();

  const menu = [
    ["Kopi", 7000],
    ["Milo Dingin", 6000],
    ["Gelato", 5000],
    ["Pasta", 10000],
  ];

  const [countOrder, setCount] = useState(1);
  const add = () => {
    setCount(countOrder + 1);
  };
  const min = () => {
    setCount(countOrder - 1);
    if (countOrder == 0) {
      setCount(0);
    }
  };
  return (
    <div className="flex flex-col font-semibold w-full mb-20 relative bg-white">
      <div className="py-2 w-full z-40 fixed bottom-0 ring-0 left-0 bg-white shadow-inner flex items-center justify-around text-gray-500">
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
        <Link href="/exsplore">
          <a>
            <div className="flex flex-col items-center justify-center">
              <Icon.Explore className="h-7 w-7 text-gray-700" />
              <div className="text-xs">Explore</div>
            </div>
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Icon.Shopping className="h-7 w-7 text-gray-700" />
          <div className="text-xs">Orders</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Icon.User className="h-7 w-7 text-gray-700" />
          <div className="text-xs">Me</div>
        </div>
      </div>
      <div className="flex fixed items-center justify-between top-0 left-0 right-0 space-x-4 px-4 pt-4 z-10">
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
      <div className="h-20"></div>
      <div className="w-full  mb-4 flex justify-center items-center flex-col text-gray-800">
        <div className="text-lg"> Koffie Cling</div>
        <div>My Order</div>
      </div>
      {menu.map((item) => (
        <section className="px-4 rounded overflow-hidden relative">
          <div className="flex flex-col w-full bg-white shadow-lg mb-4">
            <div className="flex flex-col w-full px-2 py-2">
              <div className="flex justify-between w-full items-start">
                <div className="text-gray-800 w-4/5">{item[0]}</div>
                <div className="flex space-x-1 items-center">
                  <div className="text-xs text-gray-800">Rp {item[1]}</div>
                </div>
              </div>
              <div className="text-xs text-gray-700"></div>

              <div className="text-sm font-normal text-gray-700 mt-2 w-8/12">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <span className="flex items-center mt-4 space-x-1">
                <Icon.Pencil className="w-3 h-3" />
                <span className="text-xs font-normal">Tambah Catatan</span>
              </span>
            </div>
            <div className="flex items-center space-x-2 absolute bottom-6 right-6">
              <span
                onClick={min}
                className="cursor-pointer bg-red-300 rounded-lg h-4 w-4 flex justify-center items-center text-center  text-base"
              >
                -
              </span>
              <span className="text-sm">{countOrder}</span>
              <span
                onClick={add}
                className="cursor-pointer bg-green-300 rounded-lg h-4 w-4 flex justify-center items-center text-center  text-base"
              >
                +
              </span>
            </div>
          </div>
        </section>
      ))}
      <div className="w-full text-sm text-gray-800 px-4 py-4 space-y-2 bg-white">
        <div className="flex justify-between">
          <div>Atas Nama:</div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Icon.Pencil className="w-3 h-3" />
              <span className="text-xs font-normal">edit</span>
            </span>
            <span> Sanja </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div>No Meja:</div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Icon.Pencil className="w-3 h-3" />
              <span className="text-xs font-normal">edit</span>
            </span>
            <span> 25 </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Catatan:</div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Icon.Pencil className="w-3 h-3" />
              <span className="text-xs font-normal">edit</span>
            </span>
            <span> ...</span>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        <Link href="/konfirmasi">
          <a>
            <div className="bg-green-400 flex justify-between text-white px-3 py-3 rounded shadow-xl">
              <div> Kofirmasi Pesanan </div>
              <Icon.Shopping className="w-6 h-6" />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
