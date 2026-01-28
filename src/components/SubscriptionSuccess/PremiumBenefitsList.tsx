import { PREMIUM_BENEFITS } from "@/config/app";

export function PremiumBenefitsList() {
  return (
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
  );
}