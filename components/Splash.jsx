import Link from "next/link";

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-green-200 to-green-100">
      <Link href="/home">
        <a>
          <div className="flex space-x-2">
            <div className="font-extrabold text-9xl font-mono tracking-tight">
              LURU
            </div>
            <div className="h-6 w-6 rounded-full bg-black"></div>
          </div>
        </a>
      </Link>
    </div>
  );
}
