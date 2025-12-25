"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Sun, Palmtree, Mountain, Users, Camera, Heart } from "lucide-react";

const categories = [
  {
    title: "Esthetic Vibes",
    emoji: "✨",
    icon: Camera,
    color: "from-pink-400 to-purple-400",
    bgColor: "from-pink-50 to-purple-50",
    images: Array.from({ length: 10 }, (_, i) => `/esthetic${i + 1}.jpg`),
  },
  {
    title: "Weekend Fun",
    emoji: "🎉",
    icon: Sun,
    color: "from-orange-400 to-yellow-400",
    bgColor: "from-orange-50 to-yellow-50",
    images: Array.from({ length: 10 }, (_, i) => `/weekend${i + 1}.jpg`),
  },
  {
    title: "Family Time",
    emoji: "👨‍👩‍👧‍👦",
    icon: Users,
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
    images: Array.from({ length: 10 }, (_, i) => `/family${i + 1}.jpg`),
  },
  {
    title: "Beach Days",
    emoji: "🏖️",
    icon: Palmtree,
    color: "from-cyan-400 to-teal-400",
    bgColor: "from-cyan-50 to-teal-50",
    images: Array.from({ length: 10 }, (_, i) => `/beach${i + 1}.jpg`),
  },
  {
    title: "Nature Escape",
    emoji: "🌿",
    icon: Sparkles,
    color: "from-green-400 to-emerald-400",
    bgColor: "from-green-50 to-emerald-50",
    images: Array.from({ length: 10 }, (_, i) => `/nature${i + 1}.jpg`),
  },
  {
    title: "Mountain View",
    emoji: "⛰️",
    icon: Mountain,
    color: "from-slate-400 to-blue-400",
    bgColor: "from-slate-50 to-blue-50",
    images: Array.from({ length: 10 }, (_, i) => `/mountain${i + 1}.jpg`),
  },
];

export default function HolidayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sun className="w-7 h-7 text-orange-400 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Holiday Moments-ku
            </h1>
            <Sparkles className="w-7 h-7 text-pink-400 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            ✨ Kenangan liburan seruku! ✨
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Kumpulan momen bahagia dari setiap petualangan
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <CategoryCarousel
              key={idx}
              title={category.title}
              emoji={category.emoji}
              Icon={category.icon}
              color={category.color}
              bgColor={category.bgColor}
              images={category.images}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16  rounded-3xl p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Making Memories
            </h3>
            <Camera className="w-6 h-6 text-purple-400 animate-pulse" />
          </div>
          
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Setiap liburan adalah cerita baru yang tak terlupakan! 🌟
          </p>
          
          <div className="inline-block bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 px-6 py-3 rounded-full">
            <p className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              ✨ Collect moments, not things ✨
            </p>
          </div>
        </div>

        
      </div>
    </main>
  );
}

function CategoryCarousel({
  title,
  emoji,
  Icon,
  color,
  bgColor,
  images,
}: {
  title: string;
  emoji: string;
  Icon: any;
  color: string;
  bgColor: string;
  images: string[];
}) {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };
  
  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
      {/* Category Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Icon className={`w-6 h-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
        <h2 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {title}
        </h2>
        <span className="text-3xl animate-bounce">{emoji}</span>
      </div>

      {/* Carousel Container */}
      <div className="bg-white rounded-2xl p-4  max-w-3xl mx-auto">
        <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl bg-gray-100">
          {/* Main Image */}
          <img
            src={images[index]}
            alt={`${title} ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 hover:opacity-10 transition-opacity duration-300`}></div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setIsAutoPlay(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? `w-8 h-3 bg-gradient-to-r ${color}`
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}