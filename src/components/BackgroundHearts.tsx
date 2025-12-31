interface Heart {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color: string;
  size: string;
  delay: string;
}

const hearts: Heart[] = [
  {
    top: "top-20",
    left: "left-20",
    color: "text-lime-300",
    size: "text-2xl",
    delay: "",
  },
  {
    top: "top-40",
    right: "right-32",
    color: "text-emerald-400",
    size: "text-xl",
    delay: "",
  },
  {
    bottom: "bottom-32",
    left: "left-16",
    color: "text-lime-300",
    size: "text-lg",
    delay: "delay-1000",
  },
  {
    bottom: "bottom-20",
    right: "right-20",
    color: "text-emerald-400",
    size: "text-2xl",
    delay: "delay-500",
  },
  {
    top: "top-1/2",
    left: "left-8",
    color: "text-lime-300",
    size: "text-base",
    delay: "delay-700",
  },
  {
    top: "top-1/3",
    right: "right-8",
    color: "text-emerald-400",
    size: "text-lg",
    delay: "delay-300",
  },
  {
    top: "top-16",
    left: "left-1/2",
    color: "text-lime-300",
    size: "text-sm",
    delay: "delay-200",
  },
  {
    top: "top-60",
    left: "left-12",
    color: "text-emerald-400",
    size: "text-xs",
    delay: "delay-800",
  },
  {
    bottom: "bottom-40",
    right: "right-12",
    color: "text-lime-300",
    size: "text-sm",
    delay: "delay-400",
  },
  {
    top: "top-1/4",
    left: "left-20",
    color: "text-emerald-400",
    size: "text-lg",
    delay: "delay-1200",
  },
  {
    bottom: "bottom-1/3",
    right: "right-24",
    color: "text-lime-300",
    size: "text-xl",
    delay: "delay-600",
  },
  {
    top: "top-3/4",
    left: "left-1/3",
    color: "text-emerald-400",
    size: "text-base",
    delay: "delay-900",
  },
  {
    bottom: "bottom-16",
    left: "left-1/2",
    color: "text-lime-300",
    size: "text-xs",
    delay: "delay-1100",
  },
  {
    top: "top-32",
    right: "right-16",
    color: "text-emerald-400",
    size: "text-sm",
    delay: "delay-300",
  },
  {
    bottom: "bottom-60",
    left: "left-32",
    color: "text-lime-300",
    size: "text-lg",
    delay: "delay-800",
  },
  {
    top: "top-2/3",
    right: "right-1/3",
    color: "text-emerald-400",
    size: "text-base",
    delay: "delay-500",
  },
  {
    bottom: "bottom-24",
    right: "right-1/2",
    color: "text-lime-300",
    size: "text-sm",
    delay: "delay-1000",
  },
  {
    top: "top-48",
    left: "left-1/4",
    color: "text-emerald-400",
    size: "text-xs",
    delay: "delay-400",
  },
];

export default function BackgroundHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className={`absolute ${heart.top || heart.bottom} ${
            heart.left || heart.right
          } ${heart.color} ${heart.size} animate-bounce ${heart.delay}`}
        >
          🍌
        </div>
      ))}
    </div>
  );
}
