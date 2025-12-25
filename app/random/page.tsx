"use client";

import { Video, Image, Sparkles, Heart, Smile, Play } from "lucide-react";
import { useState } from "react";

export default function RandomPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      src: "/1.mp4",
      title: "Forever Yours",
      description: "Every moment with you feels like a beautiful dream come true.",
      color: "from-blue-300 to-rose-300",
      icon: "💕"
    },
    {
      src: "/2.mp4",
      title: "Love in Bloom",
      description: "My heart blooms with joy every time I think of you.",
      color: "from-purple-300 to-pink-300",
      icon: "🌸"
    },
    {
      src: "/3.mp4",
      title: "Together Always",
      description: "With you, every day is a new chapter of our love story.",
      color: "from-red-300 to-pink-300",
      icon: "💖"
    },
  ];

  const photos = [
    { src: "/1.png", title: "Oops Moment", emoji: "😅" },
    { src: "/2.png", title: "Silly Face", emoji: "🤪" },
    { src: "/3.png", title: "Happy Vibes", emoji: "😄" },
    { src: "/4.png", title: "Clumsy Me", emoji: "🙃" },
    { src: "/5.png", title: "Giggles", emoji: "🤭" },
    { src: "/6.png", title: "Funky Time", emoji: "😎" },
    { src: "/7.png", title: "Wink Wink", emoji: "😉" },
    { src: "/8.png", title: "Goofy Day", emoji: "🤓" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-7 h-7 text-pink-400 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Koleksi Random-ku
            </h1>
            <Sparkles className="w-7 h-7 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            ✨ Campuran video & foto kesukaanku! ✨
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Kumpulan momen spesial dan lucu yang bikin hati senang
          </p>
        </div>

        {/* Video Gallery Section */}
        <div className="mb-16 px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <Video className="w-6 h-6 text-pink-500" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Romantic Videos
            </h2>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Video Header */}
                <div className={`bg-gradient-to-r ${video.color} p-4 relative`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{video.icon}</span>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {video.title}
                      </h3>
                    </div>
                    <div className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-semibold">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Player */}
                <div className="relative w-full bg-black">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-auto object-contain bg-black rounded-b-3xl"
                    onPlay={() => setPlayingVideo(index)}
                    onPause={() => setPlayingVideo(null)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                    "{video.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <Sparkles className="mx-4 w-6 h-6 text-purple-400" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        {/* Photo Gallery Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image className="w-6 h-6 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Funny Photos
            </h2>
            <Smile className="w-6 h-6 text-yellow-500 fill-yellow-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-orange-100 to-yellow-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Title */}
                <div className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50">
                  <h3 className="text-sm sm:text-base font-bold text-center bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16  rounded-3xl  p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Love & Laughter
            </h3>
            <Smile className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
          </div>

          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Hidup indah dengan cinta dan tawa! 💕😄
          </p>

          <div className="inline-block bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 px-6 py-3 rounded-full">
            <p className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              ✨ Keep smiling, keep loving ✨
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}