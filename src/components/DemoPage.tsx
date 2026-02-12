import { useState } from "react";
import { ArrowLeft, Play, ExternalLink, Brain } from "lucide-react";

interface DemoPageProps {
  onNavigateToHome: () => void;
}

function DemoPage({ onNavigateToHome }: DemoPageProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onNavigateToHome}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Asosiy sahifa</span>
            </button>

            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI Mentor
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Demo</h1>
          <p className="text-xl text-gray-600">
            AI Mentor platformasi qanday ishlashini ko'ring
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">

          {/* VIDEO PLAYER */}
          <div className="mb-8">
            {!showVideo ? (
              <div
                onClick={() => setShowVideo(true)}
                className="relative bg-gray-900 rounded-xl h-[400px] flex items-center justify-center cursor-pointer hover:opacity-90 transition"
              >
                <div className="bg-white/20 p-6 rounded-full">
                  <Play className="w-12 h-12 text-white" />
                </div>

                <p className="absolute bottom-4 text-gray-300 text-sm">
                  Videoni ko‘rish uchun bosing
                </p>
              </div>
            ) : (
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/_jSmzUW65oE"
                  title="AI Mentor Demo"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Video description */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Video tavsifi
            </h3>

            <div className="space-y-3 text-gray-700">
              <p>
                Bu demo videoda siz AI Mentor platformasining asosiy
                funksiyalarini ko'rasiz:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>AI bilan suhbat:</strong> Real vaqtda savollarga javob
                </li>
                <li>
                  <strong>Kod yozish yordami:</strong> AI maslahatlari
                </li>
                <li>
                  <strong>Xatolarni tuzatish:</strong> Debug qilish
                </li>
                <li>
                  <strong>O'zbek tilida:</strong> Tushuntirishlar
                </li>
                <li>
                  <strong>Amaliy mashqlar:</strong> Real loyihalar
                </li>
              </ul>

              <p className="mt-4 text-sm text-gray-600">
                Python, JavaScript, React va API bilan ishlash
              </p>
            </div>
          </div>
        </div>

        {/* Prototype Section */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white mb-12">

          <div className="flex items-center space-x-3 mb-6">
            <ExternalLink className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Ishlayotgan Prototip</h2>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-6">

            <p className="mb-4">
              Beta versiyada quyidagi funksiyalar mavjud:
            </p>

            <ul className="space-y-2 mb-6">
              <li>✅ AI chatbot 24/7</li>
              <li>✅ Kod misollari</li>
              <li>✅ O‘zbek/Rus interfeys</li>
              <li>⚡ Kod tekshirish (beta)</li>
              <li>⚡ Learning plan</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <a
              href="https://demo.ai-mentor.uz"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex justify-center items-center space-x-2"
            >
              <span>Prototipni sinab ko'ring</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <button className="bg-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition">
              Beta dasturga qo‘shiling
            </button>

          </div>

        </div>

        {/* API Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            API Access
          </h2>

          <p className="text-gray-700 mb-6">
            AI Mentor API orqali o‘z ilovangizga AI qo‘shing.
          </p>

          <div className="bg-blue-50 rounded-xl p-6">

            <h3 className="font-bold mb-3">
              API kalit olish
            </h3>

            <p className="mb-4">
              Beta dasturga qo‘shilib bepul API oling.
            </p>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              API so‘rash
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">

        <div className="max-w-7xl mx-auto text-center px-4">

          <div className="flex justify-center items-center space-x-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">AI Mentor</span>
          </div>

          <p className="text-gray-400">
            Dasturlashni o‘rganishning zamonaviy yo‘li
          </p>

          <p className="text-gray-500 mt-4">
            © 2026 AI Mentor
          </p>

        </div>

      </footer>

    </div>
  );
}

export default DemoPage;