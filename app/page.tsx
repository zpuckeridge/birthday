"use client";

import SlideUp from "@/components/slide-up";
import { TextGenerateEffect } from "@/components/text-generate";
import { useState } from "react";
import Confetti from "react-dom-confetti";

export default function Home() {
  const [active, setActive] = useState(false);

  const confettiConfig = {
    angle: 90,
    spread: 500,
    startVelocity: 40,
    elementCount: 280,
    dragFriction: 0.1,
    duration: 5000,
    stagger: 5,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <Confetti
          ref={() => {
            setActive(true);
          }}
          active={active}
          config={confettiConfig}
        />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center space-y-10 md:space-y-20 px-8 py-10">
        <div className="text-8xl md:text-9xl font-alt text-center ">
          <SlideUp words="Happy Birthday Mum!" />
        </div>
        <div className="text-base md:text-xl font-sans text-center  max-w-2xl">
          <TextGenerateEffect
            delayBeforeStart={0}
            duration={2}
            words="Happy 50th Birthday to the most wonderful mother! You truly go above and beyond in all areas of your life. You've fought long and hard with many trials, yet you stand above it all with a hope for the future. Here's to many
          more wonderful years filled with joy and life!"
          />
        </div>
        <div className="font-sans text-center">
          <TextGenerateEffect
            delayBeforeStart={8000}
            duration={1.5}
            words="With much love from your sons,"
          />
          <TextGenerateEffect
            delayBeforeStart={9000}
            duration={1.5}
            words="Zacchary, Harrison and Benjamin"
          />
        </div>
      </main>
    </>
  );
}
