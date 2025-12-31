import { SubscriptionSuccessProps } from "@/types";
import { PREMIUM_BENEFITS } from "@/config/app";

export default function SubscriptionSuccess({
  onClose,
}: SubscriptionSuccessProps) {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-lg w-full mx-2 sm:mx-4 border border-lime-200 transition-all duration-500 ease-in-out">
      {/* Celebration Elements */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
        🎉
      </div>
      <div className="absolute -top-2 -left-2 text-4xl animate-pulse">🎊</div>
      <div className="absolute -top-2 -right-2 text-4xl animate-pulse">✨</div>

      {/* Success Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-4">
          Yay! 🎉
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Subscription Successfully Renewed!
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Thank you for choosing to continue this amazing journey together 💕
        </p>
      </div>

      {/* Premium Benefits */}
      <div className="bg-emerald-50 rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
          Your Premium Benefits:
        </h3>
        <div className="space-y-3">
          {PREMIUM_BENEFITS.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-emerald-500 text-xl">💚</span>
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Love Message */}
      <div className="text-center">
        <p className="text-2xl font-bold text-emerald-600 mb-4">
          I love you! ❤️
        </p>

        {onClose && (
          <button
            onClick={onClose}
            className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Continue Journey 💕
          </button>
        )}
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-3 left-3 text-emerald-300 text-xl opacity-50">
        🌟
      </div>
      <div className="absolute top-3 right-3 text-emerald-300 text-xl opacity-50">
        🌟
      </div>
      <div className="absolute bottom-3 left-3 text-emerald-300 text-xl opacity-50">
        🌟
      </div>
      <div className="absolute bottom-3 right-3 text-emerald-300 text-xl opacity-50">
        🌟
      </div>
    </div>
  );
}
