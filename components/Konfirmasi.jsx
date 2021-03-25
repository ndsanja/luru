import { useState } from "react";
import Link from "next/link";
import * as Icon from "./icons";
import { useRouter } from "next/router";

export default function Konfirmasi() {
  const router = useRouter();

  const menu = [
    ["Kopi", 7000],
    ["Milo Dingin", 6000],
    ["Gelato", 5000],
    ["Pasta", 10000],
  ];

  const [isDone, setDone] = useState(false);
  const [isDiantar, setDiantar] = useState(false);

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
        <div
          onClick={() => setDone(!isDone)}
          className="flex flex-col items-center justify-center"
        >
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
          <div className="text-xs">Order</div>
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
        <div>Order No: OR8376824XYZ</div>
      </div>
      <div className="px-4 flex items-center justify-center bg-white rounded shadow-lg">
        <img
          className="w-60 h-60"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="bg-white flex items-center justify-center px-6 pt-4">
        <div className="text-center border-2 border-blue-500 rounded p-2 text-blue-500">
          Tunjukan dan scan QrCode berikut ke Kasir kemudian lakukan pembayaran
          dengan total Rp 33.000 untuk menyelesikan pemesanan.
        </div>
      </div>
      <div className=" px-6 py-8 space-y-2">
        <div className="text-lg">Info Detail Pesanan</div>
        <div className="flex justify-between text-gray-700 font-normal">
          <div className="flex space-x-4">
            <div>Kopi</div>
            <div>1 x 7.000</div>
          </div>
          <div>Rp 7.000</div>
        </div>
        <div className="flex justify-between text-gray-700 font-normal">
          <div className="flex space-x-4">
            <div>Milo Dingin</div>
            <div>1 x 6.000</div>
          </div>
          <div>Rp 6.000</div>
        </div>
        <div className="flex justify-between text-gray-700 font-normal">
          <div className="flex space-x-4">
            <div>Gelato</div>
            <div>2 x 5.000</div>
          </div>
          <div>Rp 10.000</div>
        </div>
        <div className="flex justify-between text-gray-700 font-normal">
          <div className="">
            <div className="flex space-x-4">
              <div>Pasta</div>
              <div>1 x 10.000</div>
            </div>
            <div className="italic text-xs">Sendok & Garpunya minta double</div>
          </div>
          <div>Rp 10.000</div>
        </div>
        <div className="flex justify-between text-gray-700">
          <div className="flex space-x-4">
            <div>Total</div>
          </div>
          <div>Rp 33.000</div>
        </div>

        <div className="flex justify-between text-gray-700">
          <div className="flex space-x-4">
            <div>Atas Nama</div>
          </div>
          <div>Sanja</div>
        </div>
        <div className="flex justify-between text-gray-700">
          <div className="flex space-x-4">
            <div>No Meja</div>
          </div>
          <div>25</div>
        </div>
        <div className="flex justify-between text-gray-700">
          <div className="">
            <div>Catatan:</div>
            <div className="font-normal">Tisu di meja ini habis</div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        {isDone ? (
          <div className="border-2 border-green-500 p-4 text-green-500 rounded">
            <div className="flex flex-col items-center justify-center font-extrabold text-xl">
              <div> Pesanan Diterima</div>
              <Icon.Check className="h-10 w-10" />
            </div>
            <div
              onClick={() => setDiantar(!isDiantar)}
              className={`${
                isDiantar
                  ? "flex justify-between text-green-500 font-normal"
                  : "flex justify-between text-yellow-500 font-normal"
              }`}
            >
              <div className="flex space-x-4">
                <div>Status</div>
              </div>
              <div>On Process</div>
            </div>
            <div className="flex justify-between text-green-500 font-normal">
              <div className="flex space-x-4">
                <div>Dibayar</div>
              </div>
              <div>Rp 50.000</div>
            </div>
            <div className="flex justify-between text-green-500 font-normal">
              <div className="flex space-x-4">
                <div>Total Dibayar</div>
              </div>
              <div>Rp 33.000</div>
            </div>
            <div className="flex justify-between text-green-500 font-normal">
              <div className="flex space-x-4">
                <div>Kembali</div>
              </div>
              <div>Rp 17.000</div>
            </div>
            <div className="flex justify-between text-green-500 font-normal">
              <div className="flex space-x-4">
                <div>Metode</div>
              </div>
              <div>Pembayaran Cash</div>
            </div>
            <div className="flex justify-between text-green-500 font-normal">
              <div className="flex space-x-4">
                <div>Kasir</div>
              </div>
              <div>Agnes Monica</div>
            </div>
            <div className="flex justify-between text-green-500 font-normal">
              <div className="flex space-x-4">
                <div>Waktu</div>
              </div>
              <div>Kamis, 17-8-2021-20.00-00-00</div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => router.back()}
            className=""
            className="bg-yellow-500 flex justify-between text-white px-3 py-3 rounded shadow-xl"
          >
            <div> Edit Pesanan </div>
            <Icon.Pencil className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
}
