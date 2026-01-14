"use client";
import { useTimeTogether } from "@/hooks/useTimeTogether";

interface TimeTogetherProps {
  startDate: string;
  className?: string;
}

export default function TimeTogether({
  startDate,
  className = "",
}: TimeTogetherProps) {
  const timeTogether = useTimeTogether(startDate);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      className={`bg-linear-to-r from-pink-50 to-emerald-50 rounded-2xl p-3 flex flex-col ${className}`}
    >
      <h3 className="text-center text-base font-bold text-gray-800 mb-2">
        Together for... 💕
      </h3>

      {/* Compact time display */}
      <div className="grid grid-cols-1 gap-2 mb-3 flex-1">
        <div className="grid grid-cols-3 gap-1 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600">
              {timeTogether.years}
            </div>
            <div className="text-xs text-gray-600 uppercase">
              Year{timeTogether.years !== 1 ? "s" : ""}
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-600">
              {timeTogether.months}
            </div>
            <div className="text-xs text-gray-600 uppercase">
              Month{timeTogether.months !== 1 ? "s" : ""}
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600">
              {timeTogether.days}
            </div>
            <div className="text-xs text-gray-600 uppercase">
              Day{timeTogether.days !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Live clock display - compact */}
        <div className="bg-white/70 rounded-xl p-2 text-center">
          <div className="text-xl text-gray-600 mb-1">Live Clock</div>
          <div className="font-mono text-xl font-bold text-gray-800">
            {formatNumber(timeTogether.hours)}:
            {formatNumber(timeTogether.minutes)}:
            {formatNumber(timeTogether.seconds)}
          </div>
        </div>

        {/* Total days counter - compact */}
        <div className="text-center">
          <div className="text-xl text-gray-600">
            <span className="font-bold text-emerald-600">
              {timeTogether.totalDays.toLocaleString()}
            </span>{" "}
            days of love! 🥰
          </div>
        </div>
      </div>
    </div>
  );
}
