'use client';

import React from 'react';
import localFont from 'next/font/local';

const digital = localFont({
  src: '../assets/fonts/digital-7 (mono).ttf',
});

const Timer = ({ date }: { date: Date }) => {
  const [days, setDays] = React.useState<string>('00');
  const [hours, setHours] = React.useState<string>('00');
  const [minutes, setMinutes] = React.useState<string>('00');
  const [seconds, setSeconds] = React.useState<string>('00');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = date.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        return;
      }

      const currentDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const currentHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const currentMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const currentSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(currentDays < 10 ? `0${currentDays}` : `${currentDays}`);
      setHours(currentHours < 10 ? `0${currentHours}` : `${currentHours}`);
      setMinutes(
        currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`
      );
      setSeconds(
        currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={digital.className}>
      <div className="flex flex-col items-center gap-6">
        <h4 className="text-green md:text-3xl text-xl">Are you ready ?</h4>

        <div className="flex items-center gap-8">
          <div className={styles.container}>
            <h2 className={styles.digits}>
              <span>{days}</span>
              <span className={styles.backgroundDigits}>00</span>
            </h2>
            <p className={styles.text}>Days</p>
          </div>

          <div className={styles.container}>
            <h2 className={styles.digits}>
              <span>{hours}</span>
              <span className={styles.backgroundDigits}>00</span>
            </h2>
            <p className={styles.text}>Hours</p>
          </div>

          <div className={styles.container}>
            <h2 className={styles.digits}>
              <span>{minutes}</span>
              <span className={styles.backgroundDigits}>00</span>
            </h2>
            <p className={styles.text}>Minutes</p>
          </div>

          <div className={styles.container}>
            <h2 className={styles.digits}>
              {' '}
              <span>{seconds}</span>
              <span className={styles.backgroundDigits}>00</span>
            </h2>
            <p className={styles.text}>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

const styles = {
  container: 'flex flex-col justify-center items-center gap-2',
  digits: 'md:text-6xl text-4xl text-primary relative',
  text: 'md:text-lg  text-secondary',
  backgroundDigits: 'absolute top-0 left-0 opacity-10',
};
