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

export const formatDate = (date: Date, format: string) => {
  const WEEK_KOR_NAMES = ['일', '월', '화', '수', '목', '금', '토'];
  const WEEK_ENG_LONG_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const WEEK_ENG_SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return format.replace(/(YYYY|YY|MM|DD|WK|WEL|WES|HH|hh|mm|ss|a\/pK|a\/pE)/gi, (val) => {
    switch (val) {
      case 'YYYY':
        return date.getFullYear().toString(); // 년 (4자리)
      case 'YY':
        return date.getFullYear().toString().slice(-2); // 년 (2자리)
      case 'MM':
        return (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (2자리)
      case 'DD':
        return date.getDate().toString().padStart(2, '0'); // 일 (2자리)
      case 'WK':
        return WEEK_KOR_NAMES[date.getDay()]; // 요일 (한글)
      case 'WEL':
        return WEEK_ENG_LONG_NAMES[date.getDay()]; // 요일 (긴 영어)
      case 'WES':
        return WEEK_ENG_SHORT_NAMES[date.getDay()]; // 요일 (짧은 영어)
      case 'HH':
        return date.getHours().toString().padStart(2, '0'); // 시간 (24시간 기준, 2자리)
      case 'hh':
        return (date.getHours() % 12).toString().padStart(2, '0'); // 시간 (12시간 기준, 2자리)
      case 'mm':
        return date.getMinutes().toString().padStart(2, '0'); // 분 (2자리)
      case 'ss':
        return date.getSeconds().toString().padStart(2, '0'); // 초 (2자리)
      case 'a/pK':
        return date.getHours() < 12 ? '오전' : '오후'; // 오전/오후 구분
      case 'a/pE':
        return date.getHours() < 12 ? 'AM' : 'PM'; // AM/PM 구분
      default:
        return val;
    }
  });
};
