import { Brain, Code, Rocket, Users, CheckCircle, ArrowRight, Target, Lightbulb } from 'lucide-react';

interface LandingPageProps {
  onNavigateToDemo: () => void;
}

function LandingPage({ onNavigateToDemo }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI Mentor
              </span>
            </div>
            <button
              onClick={onNavigateToDemo}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dasturlashni o'rganish endi
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> AI bilan oson</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaxsiy AI mentoringiz 24/7 savollaringizga javob beradi va sizning o'rganish jarayoningizni yangi bosqichga olib chiqadi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold text-gray-900">Muammo</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Dasturlashni o'rganish qiyin va vaqt talab etadi</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Shaxsiy mentor topish qimmat va har doim mavjud emas</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Savollarga darhol javob ololmaslik o'rganishni sekinlashtiradi</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">O'zbek tilida sifatli dasturlash resurslari kam</p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Lightbulb className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Yechim</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p>AI-asosli shaxsiy mentor 24/7 sizga yordam beradi</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p>Real vaqtda kod yozishda yordam va xatolarni tuzatish</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p>O'zbek va rus tillarida tushuntirishlar</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p>Amaliy loyihalar orqali o'rganish</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Bizning Jamoa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jamoamiz</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>CEO & AI Architect:</strong> Shahboz Hamroqulov</p>
                <p><strong>Lead Developer:</strong> Amanov Asadbek</p>
                <p><strong>UX/UI Designer:</strong> Jasur Sharipov</p>
                <p><strong>ML Engineer:</strong> Dilshod Tursunov</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Texnologiyalar</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">OpenAI GPT-4</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TailwindCSS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Python</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ko'nikmalar</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ AI & Machine Learning</li>
                <li>✓ Full-Stack Development</li>
                <li>✓ DevOps & Cloud</li>
                <li>✓ UI/UX Design</li>
                <li>✓ Ta'lim platformalari</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-xl mb-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Nima uchun bizning jamoa?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tajriba</h3>
                  <p className="text-gray-700">5+ yillik tajriba AI va ta'lim texnologiyalari sohasida</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mahalliy bozorni bilish</h3>
                  <p className="text-gray-700">O'zbekiston bozorini va o'quvchilar ehtiyojlarini chuqur tushunamiz</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zamonaviy texnologiyalar</h3>
                  <p className="text-gray-700">Eng so'nggi AI va web texnologiyalaridan foydalanamiz</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Foydalanuvchi tajribasi</h3>
                  <p className="text-gray-700">Intuitiv va qulay interfeys yaratish bo'yicha kuchli tajriba</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Yo'l Xaritasi</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Idea</h3>
                <p className="text-gray-700 text-sm">Kontseptsiya ishlab chiqildi va tasdiqlandi</p>
                <p className="text-green-600 font-semibold mt-2">Bajarildi</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prototype</h3>
                <p className="text-gray-700 text-sm">Asosiy funksiyalar bilan prototip tayyor</p>
                <p className="text-green-600 font-semibold mt-2">Bajarildi</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-100 border-2 border-blue-500 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">MVP</h3>
                <p className="text-gray-700 text-sm">Beta versiyani ishlab chiqish jarayonida</p>
                <p className="text-blue-600 font-semibold mt-2">Jarayonda</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Launched</h3>
                <p className="text-gray-700 text-sm">To'liq ishga tushirish rejalashtirilmoqda</p>
                <p className="text-gray-600 font-semibold mt-2">Q3 2026</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 shadow-xl text-white mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Implementatsiya Rejasi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Texnik Bosqichlar</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">1. Frontend Development</h4>
                  <p className="text-sm">React + TypeScript + TailwindCSS</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">2. Backend & Database</h4>
                  <p className="text-sm">Supabase (PostgreSQL + Auth + Realtime)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">3. AI Integration</h4>
                  <p className="text-sm">OpenAI GPT-4 API orqali AI mentor funksiyasi</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">4. Testing & Deployment</h4>
                  <p className="text-sm">Jest, Playwright, Vercel/Netlify</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">AI Vositalari va Yechimlar</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">OpenAI GPT-4</h4>
                  <p className="text-sm">Asosiy AI mentor uchun natural language processing</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Code Execution Sandbox</h4>
                  <p className="text-sm">Judge0 API yoki xavfsiz konteynerda kod ishga tushirish</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Vector Database</h4>
                  <p className="text-sm">Supabase pgvector - kurs materiallari uchun semantic search</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Analytics & Monitoring</h4>
                  <p className="text-sm">Vercel Analytics + Custom dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNavigateToDemo}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto"
          >
            <span>Demo-ni ko'rish</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
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

export default LandingPage;
