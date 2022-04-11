export const getTimeDifference = (date1: Date, date2: Date) => {
  let preDate: Date;
  let nextDate: Date;

  if (date1.getTime() < date2.getTime()) {
    preDate = date1;
    nextDate = date2;
  } else {
    preDate = date2;
    nextDate = date1;
  }
  const [preYear, preMonth, preDay] = [
    preDate.getUTCFullYear(),
    preDate.getUTCMonth(),
    preDate.getUTCDate(),
  ];
  const [nextYear, nextMonth, nextDay] = [
    nextDate.getUTCFullYear(),
    nextDate.getUTCMonth(),
    nextDate.getUTCDate(),
  ];

  if (nextYear - preYear > 0) return `${nextYear - preYear}년`;
  if (nextMonth - preMonth > 0) return `${nextMonth - preMonth}달`;
  if (nextDay - preDay > 0) return `${nextDay - preDay}일`;

  const preTime = Math.floor(preDate.getTime() / 1000);
  const nextTime = Math.floor(nextDate.getTime() / 1000);
  const [preHour, preMinute, preSecond] = [
    Math.floor(preTime / 3600),
    Math.floor(preTime / 60),
    preTime % 60,
  ];
  const [nextHour, nextMinute, nextSecond] = [
    Math.floor(nextTime / 3600),
    Math.floor(nextTime / 60),
    nextTime % 60,
  ];
  if (nextHour - preHour > 0) return `${nextHour - preHour}시간`;
  if (nextMinute - preMinute > 0) return `${nextMinute - preMinute}분`;
  if (nextSecond - preSecond > 0) return `${nextSecond - preSecond}초`;
  else return '방금';
};
