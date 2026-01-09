import { FaTelegram } from 'react-icons/fa';

export function TelegramCTA() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white relative overflow-hidden">
      <div className="absolute -right-4 -bottom-4 text-8xl opacity-10">
        <FaTelegram />
      </div>
      <div className="relative">
        <h4 className="text-xl font-bold mb-2">Telegram kanalimiz</h4>
        <p className="text-sm text-blue-100 mb-4">
          Eng so'nggi e'lonlar va yangiliklardan xabardor bo'ling.
        </p>
        <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2">
          <FaTelegram />
          Obuna bo'lish
        </button>
      </div>
    </div>
  );
}

