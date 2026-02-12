import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const sampleQuestions = [
  "Python dasturlash tilini qanday boshlayman?",
  "React nima va nima uchun ishlatiladi?",
  "O'zgaruvchilar va ma'lumot turlari haqida tushuntiring",
  "API nima?",
  "Git va GitHub farqi nimada?",
];

const botResponses: { [key: string]: string } = {
  "python": "Python - bu boshlang'ich darajadagi dasturchilar uchun juda qulay dasturlash tili. Uni o'rganishni quyidagilardan boshlashingiz mumkin:\n\n1. Python o'rnatish (python.org)\n2. Print() funksiyasi bilan tanishish\n3. O'zgaruvchilar va ma'lumot turlari\n4. If-else shartlari\n5. For va while sikllari\n\nQo'shimcha savol: Qaysi soha uchun Python o'rganmoqchisiz? (Web, AI, Data Science)",
  "react": "React - bu Facebook tomonidan yaratilgan JavaScript kutubxonasi. U yordamida interaktiv veb-ilovalar yaratish mumkin.\n\nReact afzalliklari:\n✓ Komponent asosida ishlash\n✓ Virtual DOM - tez ishlash\n✓ Katta jamoa va ko'p resurslar\n✓ React Native orqali mobil ilovalar yaratish\n\nReact o'rganish uchun birinchi HTML, CSS va JavaScript bilishingiz kerak.",
  "o'zgaruvchi": "O'zgaruvchilar - dasturlashda ma'lumotlarni saqlash uchun ishlatiladigan konteynerlar.\n\nPython'da masalan:\n```python\nism = \"Ali\"  # String (matn)\nyosh = 25    # Integer (butun son)\nbalanс = 100.5  # Float (o'nlik son)\ntalaba = True  # Boolean (mantiqiy)\n```\n\nAsosiy ma'lumot turlari:\n• String - matn\n• Integer - butun sonlar\n• Float - o'nlik sonlar\n• Boolean - True/False\n• List - ro'yxat\n• Dictionary - lug'at",
  "api": "API (Application Programming Interface) - bu turli dasturlar o'rtasida ma'lumot almashish uchun vosita.\n\nOddiy misol:\nSiz restoranda menu orqali ovqat buyurasiz. Menu - bu API, siz to'g'ridan-to'g'ri oshxonaga kirmasdan, menu orqali buyurtma berasiz.\n\nDasturlashda:\n• Weather API - ob-havo ma'lumotlari\n• YouTube API - video ma'lumotlari\n• Payment API - to'lov qilish\n\nAPI'lar odatda JSON formatida ma'lumot qaytaradi.",
  "git": "Git va GitHub - bu ikki turli narsa:\n\n**Git:**\n• Versiyalarni boshqarish tizimi\n• Kompyuteringizda ishlaydi\n• Kod o'zgarishlarini kuzatadi\n• Offline ishlaydi\n\n**GitHub:**\n• Git uchun cloud xizmat\n• Kodingizni onlayn saqlaydi\n• Jamoada ishlash imkoniyati\n• Portfolio sifatida foydalanish\n\nGit - asbob, GitHub - platforma!",
  "default": "Men AI Mentor botiman! Men sizga dasturlashni o'rganishda yordam beraman.\n\nSiz menga quyidagilar haqida savol berishingiz mumkin:\n• Python, JavaScript, React va boshqa texnologiyalar\n• Dasturlash asoslari\n• Kod yozishda yordam\n• Xatolarni tushuntirish\n\nSavol bering, men yordam beraman! 😊"
};

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Salom! Men AI Mentor botiman. Sizga dasturlashni o'rganishda qanday yordam bera olaman?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleSampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center z-50"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">AI Mentor Bot</h3>
                <p className="text-xs text-blue-100">Har doim yordam berish uchun tayyor</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                    {message.timestamp.toLocaleTimeString('uz-UZ', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-semibold">Namuna savollar:</p>
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSampleQuestion(question)}
                    className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Savolingizni yozing..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
