import { SubscriptionSuccessProps } from "@/types";
import { APP_CONFIG } from "@/config/app";
import { Card } from "./shared/Card";
import { PremiumBenefitsList } from "./SubscriptionSuccess/PremiumBenefitsList";
import TimeTogether from "./TimeTogether";

export default function SubscriptionSuccess({}: SubscriptionSuccessProps) {
  return (
    <Card 
      size="xl" 
      showCornerDecorations 
      className="h-[85vh] overflow-hidden"
    >
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
        <PremiumBenefitsList />
        
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

    </Card>
  );
}
