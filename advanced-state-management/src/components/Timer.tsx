import Container from "./UI/Container.tsx";
import {
  useTimerContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<NodeJS.Timeout | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const { isRunning } = useTimerContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);

      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatedRemaniningTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formatedRemaniningTime}</p>
    </Container>
  );
}
