import { ArrowLeft, Play, ExternalLink, Brain } from 'lucide-react';

interface DemoPageProps {
  onNavigateToHome: () => void;
}

function DemoPage({ onNavigateToHome }: DemoPageProps) {
  return (
    <div className="min-h-screen">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Demo</h1>
          <p className="text-xl text-gray-600">AI Mentor platformasi qanday ishlashini ko'ring</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Play className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Demo Video</h2>
          </div>

          <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-blue-600 ml-1" />
              </div>
              <p className="text-gray-700 font-semibold">Demo video yuklanmoqda...</p>
              <p className="text-gray-500 text-sm mt-2">Davomiyligi: 3 daqiqa 24 soniya</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Video tavsifi</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Bu demo videoda siz AI Mentor platformasining asosiy funksiyalarini ko'rasiz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI bilan suhbat:</strong> Real vaqtda dasturlash savollariga javob olish</li>
                <li><strong>Kod yozish yordami:</strong> AI sizning kodingizni tahlil qiladi va takliflar beradi</li>
                <li><strong>Xatolarni tuzatish:</strong> Kodingizda xato bo'lsa, AI uni topib tuzatishda yordam beradi</li>
                <li><strong>O'zbek tilida:</strong> Barcha tushuntirishlar o'zbek va rus tillarida</li>
                <li><strong>Amaliy mashqlar:</strong> Real loyihalar ustida ishlash orqali o'rganish</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Videoda ko'rsatilgan: Python asoslari, JavaScript dasturlash, React komponentlar yaratish va API bilan ishlash
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <ExternalLink className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Ishlayotgan Prototip</h2>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <p className="mb-4">
              Bizning Beta versiyamiz hozirda testlash bosqichida. Quyidagi funksiyalar mavjud:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-green-300">✓</span>
                <span>AI chatbot 24/7 dasturlash savollariga javob beradi</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-300">✓</span>
                <span>Kod namunalari va tushuntirishlar</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-300">✓</span>
                <span>O'zbek va rus tillarida interfeys</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-300">⚡</span>
                <span>Kod yozish va tekshirish funksiyasi (ishlab chiqilmoqda)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-300">⚡</span>
                <span>Shaxsiy o'rganish rejasi (ishlab chiqilmoqda)</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://demo.ai-mentor.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Prototipni sinab ko'ring</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Beta dasturga qo'shiling
            </button>
          </div>

          <p className="text-sm text-blue-100 mt-4 text-center">
            * Prototip faqat test maqsadida. Ba'zi funksiyalar cheklangan.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">API Access</h2>
          <p className="text-gray-700 mb-6">
            Dasturchilar uchun AI Mentor API-ni taqdim etamiz. Siz o'z ilovangizga AI mentor funksiyasini qo'shishingiz mumkin.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">API Endpoints:</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="text-green-600 font-bold">POST</span>{' '}
                <span className="text-gray-700">/api/v1/ask</span>
                <p className="text-gray-600 text-xs mt-1 font-sans">Savol yuborish va javob olish</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="text-blue-600 font-bold">POST</span>{' '}
                <span className="text-gray-700">/api/v1/code/analyze</span>
                <p className="text-gray-600 text-xs mt-1 font-sans">Kodni tahlil qilish</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="text-blue-600 font-bold">GET</span>{' '}
                <span className="text-gray-700">/api/v1/lessons</span>
                <p className="text-gray-600 text-xs mt-1 font-sans">Mavjud darslar ro'yxati</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">API kaliti olish:</h3>
            <p className="text-gray-700 mb-4">
              Beta dasturiga qo'shiling va bepul API kalitini oling. Hozircha 1000 so'rov/oy limiti bilan.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              API kalit so'rash
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">AI Mentor</span>
          </div>
          <p className="text-gray-400">Dasturlashni o'rganishning eng zamonaviy yo'li</p>
          <p className="text-gray-500 mt-4">© 2026 AI Mentor. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}

export default DemoPage;
