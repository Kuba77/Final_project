import React, { useEffect, useState } from "react";
import classes from "./Timer.module.scss";
import PropTypes from "prop-types";

const Timer = (props) => {
  const { time } = props;
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const startTimer = () => {
    const countDownDate = new Date(`${time}`).getTime();
    let interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  }, []);

  return (
    <span className={classes.timer__clock}>
      {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute} :{" "}
      {second < 10 ? "0" + second : second}
    </span>
  );
};

Timer.propTypes = {
  time: PropTypes.string,
};

export default Timer;
