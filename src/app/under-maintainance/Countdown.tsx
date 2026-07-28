"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

function getCountdown(targetTime: number): CountdownState {
  const distance = targetTime - Date.now();

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      complete: true,
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    complete: false,
  };
}

export default function Countdown() {
  const targetTime = useMemo(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 1);
    countdownDate.setHours(14, 0, 0, 0);
    return countdownDate.getTime();
  }, []);

  const [countdown, setCountdown] = useState<CountdownState>(() =>
    getCountdown(targetTime),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdown(targetTime));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetTime]);

  if (countdown.complete) {
    return <>Welcome Back!</>;
  }

  return (
    <>
      {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
      {countdown.seconds}s
    </>
  );
}
