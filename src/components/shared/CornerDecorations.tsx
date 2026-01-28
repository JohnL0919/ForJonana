interface CornerDecorationsProps {
  icon?: string;
  size?: "sm" | "md" | "lg";
  opacity?: number;
  color?: string;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-3xl", 
  lg: "text-4xl",
};

const positionClasses = [
  "absolute top-2 left-2",
  "absolute top-2 right-2", 
  "absolute bottom-2 left-2",
  "absolute bottom-2 right-2",
];

export function CornerDecorations({ 
  icon = "🌟",
  size = "md",
  opacity = 0.3,
  color = "text-emerald-300"
}: CornerDecorationsProps) {
  return (
    <>
      {positionClasses.map((position, index) => (
        <div
          key={index}
          className={`${position} ${color} ${sizeClasses[size]} animate-pulse`}
          style={{ opacity }}
        >
          {icon}
        </div>
      ))}
    </>
  );
}