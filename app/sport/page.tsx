"use client";

import { Trophy, Sparkles, Flame, Heart, Star } from "lucide-react";
import { useState } from "react";

export default function SportPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sportItems = [
    {
      src: "/1.png",
      title: "Basketball",
      description: "A fast-paced team sport played with a ball and hoop.",
      icon: "🏀",
      color: "from-orange-400 to-red-400"
    },
    {
      src: "/2.png",
      title: "Running",
      description: "Running is a great way to stay healthy and fit.",
      icon: "🏃",
      color: "from-blue-400 to-cyan-400"
    },
    {
      src: "/3.png",
      title: "Cycling",
      description: "Cycling improves endurance and strengthens leg muscles.",
      icon: "🚴",
      color: "from-green-400 to-emerald-400"
    },
    {
      src: "/4.png",
      title: "Futsal",
      description: "Futsal is an exciting indoor soccer game that improves agility and teamwork.",
      icon: "⚽",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-7 h-7 text-orange-400 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Aktivitas Olahraga-ku
            </h1>
            <Sparkles className="w-7 h-7 text-pink-400 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            ✨ Olahraga favorit aku! ✨
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Tetap sehat dan aktif dengan olahraga yang menyenangkan
          </p>
        </div>

        {/* Sport Items */}
        <div className="flex flex-col gap-6">
          {sportItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="aspect-video md:aspect-square relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-1 h-12 bg-gradient-to-b ${item.color} rounded-full`}></div>
                    <h2 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent flex items-center gap-2`}>
                      {item.title}
                      {/* Tampilkan ikon olahraga saat hover */}
                      {hoveredIndex === index && (
                        <span className="text-2xl">{item.icon}</span>
                      )}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="mt-12  rounded-3xl  p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Trophy className="w-6 h-6 text-orange-400 fill-orange-400 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Keep Moving, Keep Smiling!
            </h3>
            <Trophy className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
          </div>

          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Olahraga teratur bikin hidup lebih sehat dan bahagia! 💪✨
          </p>

          <div className="inline-block bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-3 rounded-full">
            <p className="text-orange-600 font-semibold text-sm sm:text-base">
              🔥 Sehat itu investasi terbaik 🔥
            </p>
          </div>
        </div>


      </div>
    </main>
  );
}