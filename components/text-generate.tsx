import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect: React.FC<{
  words: string;
  duration: number;
  delayBeforeStart: number;
}> = ({ words, duration, delayBeforeStart }) => {
  const wordsArray = words.split(" ");

  const [scope, animate] = useAnimate();
  const [delayedStart, setDelayedStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedStart(false);
    }, delayBeforeStart);

    return () => clearTimeout(timer);
  }, [delayBeforeStart]);

  useEffect(() => {
    if (!delayedStart) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: duration,
          delay: stagger(0.15),
        }
      );
    }
  }, [animate, delayedStart, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word) => {
          return (
            <motion.span key={word} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className="leading-snug">{renderWords()}</div>;
};
