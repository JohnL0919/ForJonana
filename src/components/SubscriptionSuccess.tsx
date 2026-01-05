import { SubscriptionSuccessProps } from "@/types";
import { PREMIUM_BENEFITS, APP_CONFIG } from "@/config/app";
import TimeTogether from "./TimeTogether";

export default function SubscriptionSuccess({}: SubscriptionSuccessProps) {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-6 max-w-5xl w-full mx-2 sm:mx-4 border border-lime-200 transition-all duration-500 ease-in-out h-[85vh] overflow-hidden">
      {/* Compact Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-emerald-600 mb-1">
          Yay! 🎉 Successfully Renewed!
        </h1>
        <p className="text-sm text-gray-600">
          Thank you BEBBBBBBB for continuing this amazing journey together 💕
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100%-120px)]">
        {/* Left Column - Premium Benefits */}
        <div className="lg:col-span-2 bg-emerald-50 rounded-2xl p-4 overflow-hidden">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-3">
            Your Premium Benefits:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {PREMIUM_BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">💚</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Time Together */}
        <div className="flex flex-col">
          <TimeTogether
            startDate={APP_CONFIG.relationshipStartDate}
            className="flex-1 h-full"
          />
        </div>
      </div>

      {/* Bottom Love Message */}
      <div className="text-center mt-4">
        <p className="text-xl font-bold text-emerald-600">
          I love you so muchieeee! ❤️
        </p>
      </div>

      {/* Corner Decorations - Smaller */}
      <div className="absolute top-2 left-2 text-emerald-300 text-lg opacity-50">
        🌟
      </div>
      <div className="absolute top-2 right-2 text-emerald-300 text-lg opacity-50">
        🌟
      </div>
      <div className="absolute bottom-2 left-2 text-emerald-300 text-lg opacity-50">
        🌟
      </div>
      <div className="absolute bottom-2 right-2 text-emerald-300 text-lg opacity-50">
        🌟
      </div>
    </div>
  );
}
