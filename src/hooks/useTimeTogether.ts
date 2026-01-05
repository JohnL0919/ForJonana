import { useState, useEffect } from "react";

interface TimeTogetherData {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export function useTimeTogether(startDate: string) {
  const [timeTogether, setTimeTogether] = useState<TimeTogetherData>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const calculateTimeDifference = () => {
      const start = new Date(startDate);
      const now = new Date();
      const diffInMs = now.getTime() - start.getTime();

      // Calculate total days
      const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      // Calculate years, months, days
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      // Adjust for negative days
      if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }

      // Adjust for negative months
      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate hours, minutes, seconds
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setTimeTogether({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    // Calculate immediately
    calculateTimeDifference();

    // Update every second
    const interval = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return timeTogether;
}
