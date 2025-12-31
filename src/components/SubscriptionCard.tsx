import HeartIcon from "./HeartIcon";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import ActionButtons from "./ActionButtons";
import CornerDecorations from "./CornerDecorations";
import { SubscriptionCardProps } from "@/types";

export default function SubscriptionCard({
  noButtonState,
  onNoButtonInteract,
  onYesClick,
}: SubscriptionCardProps) {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-md w-full mx-2 sm:mx-4 border border-lime-200 transition-all duration-300 ease-in-out">
      <HeartIcon />
      <CardTitle />
      <CardContent />
      <ActionButtons
        noButtonState={noButtonState}
        onNoButtonInteract={onNoButtonInteract}
        onYesClick={onYesClick}
      />
      <CornerDecorations />
    </div>
  );
}
