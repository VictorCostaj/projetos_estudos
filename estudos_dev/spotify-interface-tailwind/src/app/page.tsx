/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import { Play, Repeat, Shuffle, SkipBack, SkipForward, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex itens-center gap-3 text-sn font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex itens-center gap-3 text-sn font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex itens-center gap-3 text-sn font-semibold text-zinc-200"
            >
              <Library />
              Libary
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400  hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400  hover:text-zinc-100">
              Aniver Funk
            </a>
            <a href="" className="text-sm text-zinc-400  hover:text-zinc-100 ">
              My PlayList #13
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/raquel.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Raquel dos Teclados </strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play  fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors"
            >
              <Image
                src="/dudunobre.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Dudu Nobre</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded  flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors"
            >
              <Image
                src="/maiaraemaraisa.png"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Maiara e Maraísa</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors"
            >
              <Image
                src="/mariamendoca.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Marilia Mendonça</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden   hover:bg-white/10 transition-colors"
            >
              <Image
                src="/zeca.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Zeca Pagodinho</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors"
            >
              <Image
                src="/zenetoecristiano.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Zé Neto e Cristiano</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Diego Schell Fernandes
          </h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/raquel.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album"
              />
              <strong className="font-semibold">Raquel dos Teclados</strong>
              <span className="text-xs text-zinc-400">
                A Rainha da Sofrência
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/zeca.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album"
              />
              <strong className="font-semibold">Zeca Pagodinho</strong>
              <span className="text-xs text-zinc-400">Ser Humano</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/mariamendoca.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album"
              />
              <strong className="font-semibold">Maria Mendonça</strong>
              <span className="text-xs text-zinc-400">Decretos Reais</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/dudunobre.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album"
              />
              <strong className="font-semibold">Dudu Nobre</strong>
              <span className="text-xs text-zinc-400">
                O samba aqui já esquentou
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/zenetoecristiano.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album"
              />
              <strong className="font-semibold">Zé Neto e Cristiano</strong>
              <span className="text-ts text-zinc-400">
                Por Mais Beijos ao Vivo
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/raquel.jpg" width={56} height={56} alt="Capa do album" />
          <div className="flex flex-col">
            <strong className="font-normal">Agora Estou Sofrendo</strong>
            <span className="text-xs text-zinc-400">Raquel dos Teclados</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center p-1 rounded-full bg-white text-black">
              <Play fill="bg-black" />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-600">0:31</span>
          <div className="h-1 rounded w-36 bg-zinc-600"></div>
          <div className=" bg-zinc-200 w-96 h-1 rounded"></div>
          <span className="text-xs text-zinc-200">2:14</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Mic2 size={20}/>
        <LayoutList size={20}/>
        <Laptop2 size={20}/>
        <div className="flex items-center gap-2">
          <Volume size={20}/>
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className=" bg-zinc-200 w-18 h-1 rounded-full" ></div>
          </div>
        </div>
        <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  );
}
