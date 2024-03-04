import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 px-2 py-2 rounded-2xl bg-slate-50 gap-2 border-solid border-2 border-zinc-950 flex justify-center gap-2 ">
        <button
          className="shadow-lg px-5 py-2 rounded-xl text-white font-bold bg-[#FF0000]"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="shadow-lg px-5 py-2 rounded-xl text-black font-bold bg-[#FFFF00]"
          onClick={() => setColor("#FFFF00")}
        >
          Yellow
        </button>
        <button
          className="shadow-lg px-5 py-2 rounded-xl text-white  font-bold bg-[#1A237E]"
          onClick={() => setColor("#1A237E")}
        >
          Navy
        </button>
        <button
          className="shadow-lg px-5 py-2 rounded-xl text-white font-bold bg-[#004D40]"
          onClick={() => setColor("#004D40")}
        >
          Green
        </button>

        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#FF6F00]"
          onClick={() => setColor("#FF6F00")}
        >
          Orange
        </button>

        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#212121]"
          onClick={() => setColor("#212121")}
        >
          Black
        </button>

        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#AF7AC5]"
          onClick={() => setColor("#AF7AC5")}
        >
          Purple
        </button>
        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#B3B6B7]"
          onClick={() => setColor("#B3B6B7")}
        >
          Gray
        </button>
        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#039BE5]"
          onClick={() => setColor("#039BE5")}
        >
          Blue
        </button>
        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#8F00FF]"
          onClick={() => setColor("#8F00FF")}
        >
          Violet
        </button>
        <button
          className="shadow-3xl px-5 py-2 rounded-xl text-white font-bold bg-[#4B0082]"
          onClick={() => setColor("#4B0082")}
        >
          Indigo
        </button>
      </div>
    </div>
  );
}

export default App;
