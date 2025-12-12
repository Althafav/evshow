import React, { useEffect, useState } from "react";

export default function Countdown({
  eventDate,
}: {
  eventDate: string; // ISO
}) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(eventDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0)
        return setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [eventDate]);

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-5 text-center">
        {[
          { label: "Days", value: countdown.days },
          { label: "Hours", value: countdown.hours },
          { label: "Minutes", value: countdown.minutes },
          { label: "Seconds", value: countdown.seconds },
        ].map((i) => (
          <div key={i.label}>
            <div className="ev-gradient-stroke px-6 py-5 bg-black">
              <h2 className="text-3xl font-bold text-white">{i.value}</h2>
            </div>
            <h2 className="mt-2 text-xs uppercase tracking-wide text-gray-200">
              {i.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
