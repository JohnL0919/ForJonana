import HeartIcon from "./HeartIcon";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import ActionButtons from "./ActionButtons";
import { Card } from "./shared/Card";
import { SubscriptionCardProps } from "@/types";

export default function SubscriptionCard({
  noButtonState,
  onNoButtonInteract,
  onYesClick,
}: SubscriptionCardProps) {
  return (
    <Card size="lg" showCornerDecorations>
      <HeartIcon />
      <CardTitle />
      <CardContent />
      <ActionButtons
        noButtonState={noButtonState}
        onNoButtonInteract={onNoButtonInteract}
        onYesClick={onYesClick}
      />
    </Card>
  );
}
