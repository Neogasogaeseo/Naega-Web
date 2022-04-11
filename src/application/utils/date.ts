const getUTCTimeValues = (date: Date) => {
  const time = Math.floor(date.getTime() / 1000);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    date: date.getUTCDate(),
    hour: Math.floor(time / 3600),
    minute: Math.floor(time / 60),
    second: Math.floor(time % 60),
  };
};

export const getTimeDifference = (date1: Date, date2: Date) => {
  const [prevDate, nextDate] = [date1, date2].sort((a, b) => a.getTime() - b.getTime());

  const {
    year: prevYear,
    month: prevMonth,
    date: prevDay,
    hour: prevHour,
    minute: prevMinute,
    second: prevSecond,
  } = getUTCTimeValues(prevDate);
  const {
    year: nextYear,
    month: nextMonth,
    date: nextDay,
    hour: nextHour,
    minute: nextMinute,
    second: nextSecond,
  } = getUTCTimeValues(nextDate);

  if (nextYear - prevYear > 0) return `${nextYear - prevYear}년`;
  if (nextMonth - prevMonth > 0) return `${nextMonth - prevMonth}달`;
  if (nextDay - prevDay > 0) return `${nextDay - prevDay}일`;
  if (nextHour - prevHour > 0) return `${nextHour - prevHour}시간`;
  if (nextMinute - prevMinute > 0) return `${nextMinute - prevMinute}분`;
  if (nextSecond - prevSecond > 0) return `${nextSecond - prevSecond}초`;
  else return '방금';
};
