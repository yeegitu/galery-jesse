"use client";

import { useEffect, useState } from "react";
import { BookOpen, Sparkles, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function StudyPage() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 sm:p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-7 h-7 text-blue-400 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Study-ku
            </h1>
            <Sparkles className="w-7 h-7 text-pink-400 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            ✨ Dokumentasi belajar aku! ✨
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Setiap foto adalah cerita semangat belajarku
          </p>
        </div>

        {/* Image Slider */}
        <div className="w-full max-w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mb-6 sm:mb-8 p-2 sm:p-4">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Study moment ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
              />
            ))}

            {/* Navigation Buttons */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-purple-600" />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-blue-400 to-purple-400"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="w-full max-w-xs sm:max-w-3xl mx-auto rounded-3xl  p-4 sm:p-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-3 flex-wrap">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Semangat Belajar!
            </h2>
            <Heart className="w-6 h-6 text-blue-400 fill-blue-400 animate-pulse" />
          </div>

          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Terus berjuang dan jangan pernah menyerah! 💪
          </p>

          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
            <p className="text-purple-600 font-semibold text-xs sm:text-sm">
              ✨ Setiap usaha pasti ada hasilnya ✨
            </p>
          </div>
        </div>


      </div>
    </main>
  );
}