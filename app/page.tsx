"use client";

import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [likedCards, setLikedCards] = useState(new Set());

  const cards = [
    { src: "/1.png", text: "My Love", likes: "150k", comments: "35" },
    { src: "/2.png", text: "Sweet Heart", likes: "65k", comments: "92" },
    { src: "/3.png", text: "Cutie Pie", likes: "30k", comments: "175" },
    { src: "/4.png", text: "Lovely Day", likes: "110k", comments: "407" },
    { src: "/5.png", text: "Happy Mood", likes: "25k", comments: "542" },
    { src: "/1.png", text: "Sweet Smile", likes: "14k", comments: "93" },
  ];

  const toggleLike = (index: number) => {
    setLikedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              ( NAMA KAMU)
            </h1>
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            ✨My cute album✨
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Ini loh, liat album punya aku!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-pink-100 to-purple-100">
                <img
                  src={card.src}
                  alt={card.text}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                      {card.text}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-gradient-to-r from-white to-pink-50">
                <h3 className="text-lg font-bold text-gray-800 mb-3 truncate">
                  {card.text}
                </h3>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleLike(index)}
                    className="flex items-center gap-2 group/like transition-transform hover:scale-110"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${likedCards.has(index)
                        ? 'fill-red-500 text-red-500 animate-bounce'
                        : 'text-gray-400 group-hover/like:text-red-400'
                        }`}
                    />
                    <span className={`text-sm font-semibold ${likedCards.has(index) ? 'text-red-500' : 'text-gray-600'
                      }`}>
                      {card.likes}
                    </span>
                  </button>

                  <button className="flex items-center gap-2 group/comment transition-transform hover:scale-110">
                    <MessageCircle className="w-5 h-5 text-gray-400 group-hover/comment:text-blue-400 transition-colors" />
                    <span className="text-sm font-semibold text-gray-600">
                      {card.comments}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Asikin Ajaaa
          </h1>
          <span className="text-4xl inline-block">🤪</span>
        </div>



      </div>
    </main>
  );
}